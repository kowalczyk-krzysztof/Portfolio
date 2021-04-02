import React, { FC, useState, FormEvent } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Components
import SubmitButton from './SubmitButton';
// Utils
import { emptyFieldValidator } from '../../utils/emptyFieldValidator';
import { sendEmail } from '../../utils/sendEmail';
import { regexCheck } from '../../utils/regexEmail';
// Styling
import { StyledNotification } from './contact-styling';

// Input fields
enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}
// Setting opacity of warning fields
enum NotificationDisplay {
  HIDE = 0,
  SHOW = 1,
}

// Button styles
export enum ButtonStyle {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

const ContactForm: FC = (): JSX.Element => {
  /* FORM SETTINGS */

  // Form id
  const formId: string = 'contact';
  // Text area max rows
  const maxRows: number = 8;
  // Max textarea character length
  const messageMaxLength: number = 256;

  /* LOCALIZATION */
  const localization: Locale = useSelector(localizationSelector);
  const {
    contactNameField,
    contactEmailField,
    contactMessageField,
    inputCharactersLeft,
    enterName,
    invalidEmail,
    enterMessage,
  } = localization;

  /* STATES */

  // Name field
  const [name, setName] = useState<string>(``);
  // Check if name is empty
  const [
    invalidNameNotification,
    setInvalidNameNotification,
  ] = useState<NotificationDisplay>(NotificationDisplay.HIDE);
  // Email field
  const [email, setEmail] = useState(``);
  // Check if email is empty
  const [
    invalidEmailNotification,
    setInvalidEmailNotification,
  ] = useState<NotificationDisplay>(NotificationDisplay.HIDE);
  // Message field
  const [message, setMessage] = useState<string>('');
  // Check if msg is empty
  const [
    invalidMessageNotification,
    setInvalidMessageNotification,
  ] = useState<NotificationDisplay>(NotificationDisplay.HIDE);
  // Display characters left in text area
  const [charactersLeft, setcharactersLeft] = useState<number>(
    messageMaxLength
  );
  // Button state
  const [buttonStyle, setButtonStyle] = useState<ButtonStyle>(
    ButtonStyle.DEFAULT
  );
  // Email was sent
  const [isEmailSent, setIsEmailSent] = useState<NotificationDisplay>(
    NotificationDisplay.HIDE
  );

  /* UTILS */

  // Resetting form fields
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  // Resetting notifications
  const resetNotifications = () => {
    setInvalidNameNotification(NotificationDisplay.HIDE);
    setInvalidEmailNotification(NotificationDisplay.HIDE);
    setInvalidMessageNotification(NotificationDisplay.HIDE);
  };

  /* FORM METHODS */

  // On change
  const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const targetValue: string = e.currentTarget.value;
    const targetName: string = e.currentTarget.name;
    // Assigning values to respective states
    if (targetName === FieldNames.NAME) setName(targetValue);
    if (targetName === FieldNames.EMAIL) setEmail(targetValue);
    if (targetName === FieldNames.MESSAGE) {
      // IMPORTANT: Make sure im doing the math for characters left on e.currentTarget.value, NOT state
      setcharactersLeft(messageMaxLength - targetValue.length);
      setMessage(targetValue);
    }
  };

  // On submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* VALIDATING FIELDS 
      name, email and message are states of fields (so e.currentTarget.value from onChange)
    */

    // Validating name field
    const nameValidation = emptyFieldValidator(name);
    if (nameValidation === true) {
      setName(name);
      setInvalidNameNotification(NotificationDisplay.HIDE);
    } else {
      setName('');
      setInvalidNameNotification(NotificationDisplay.SHOW);
    }
    // Valdiating email field
    const emailValidation = regexCheck(email);
    if (emailValidation === true) {
      setEmail(email);
      setInvalidEmailNotification(NotificationDisplay.HIDE);
    } else {
      // Here I'm NOT resetting the state because I think it's good to keep the email in there so user can check what's wrong
      setInvalidEmailNotification(NotificationDisplay.SHOW);
    }
    // Validating message field
    const messageValidation = emptyFieldValidator(message);
    if (messageValidation === true) {
      setMessage(message);
      setInvalidMessageNotification(NotificationDisplay.HIDE);
    } else {
      setMessage('');
      setInvalidMessageNotification(NotificationDisplay.SHOW);
    }

    // If all fields are valid then change the button style to loading, reset all fields, try to send e-mail then let user know if e-mail was sent by changing the button style and displaying a notificiations
    if (
      nameValidation === true &&
      emailValidation === true &&
      messageValidation === true
    ) {
      // Checking if email was sent
      setButtonStyle(ButtonStyle.LOADING);
      const emailSent = await sendEmail(name, email, message);
      if (emailSent === true) {
        setButtonStyle(ButtonStyle.SUCCESS);
        setIsEmailSent(NotificationDisplay.SHOW);
      } else {
        setIsEmailSent(NotificationDisplay.HIDE);
        setButtonStyle(ButtonStyle.FAILURE);
      }

      // Resetting form state and hiding notifications
      resetForm();
      resetNotifications();
    }
  };

  return (
    <form onSubmit={onSubmit} id={formId}>
      <label htmlFor={FieldNames.NAME}>{contactNameField}</label>
      <input
        type="text"
        onChange={onChange}
        name={FieldNames.NAME}
        value={name}
        placeholder={contactNameField}
      ></input>
      <StyledNotification display={invalidNameNotification}>
        {enterName}
      </StyledNotification>
      <label htmlFor={FieldNames.EMAIL}>{contactEmailField}</label>
      <input
        type="text"
        onChange={onChange}
        name={FieldNames.EMAIL}
        value={email}
        placeholder={contactEmailField}
      ></input>
      <StyledNotification display={invalidEmailNotification}>
        {invalidEmail}
      </StyledNotification>
      <label htmlFor={FieldNames.MESSAGE}>{contactMessageField}</label>
      <textarea
        rows={maxRows}
        maxLength={messageMaxLength}
        onChange={onChange}
        name={FieldNames.MESSAGE}
        value={message}
        placeholder={contactMessageField}
      ></textarea>
      <StyledNotification display={invalidMessageNotification}>
        {enterMessage}
      </StyledNotification>
      <p>
        {inputCharactersLeft}
        {charactersLeft}
      </p>
      <SubmitButton
        type="submit"
        form={formId}
        style={buttonStyle}
      ></SubmitButton>
    </form>
  );
};

export default ContactForm;
