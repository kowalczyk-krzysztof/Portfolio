import React, { FC, useState, FormEvent } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Components
import NamePopover from './NamePopover';
import EmailPopover from './EmailPopover';
import MessagePopover from './MessagePopover';

import SubmitButton from './SubmitButton';
import EmailSentNotification from './EmailSentNotificaiton';
// Utils
import { emptyFieldValidator } from '../../utils/emptyFieldValidator';
import { sendEmail } from '../../utils/sendEmail';
import { regexCheck } from '../../utils/regexEmail';
// Styling
import {
  StyledLabel,
  StyledTextArea,
  StyledInput,
  StyledForm,
  StyledCharactersLeft,
} from './contact-styling';

// Input fields
enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

// Popover styles
export enum PopoverStyles {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

// State styles
export enum StateStyle {
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
  } = localization;

  /* STATES */

  // Name field
  const [name, setName] = useState<string>(``);
  // Check if name is empty
  const [namePopover, setNamePopover] = useState<PopoverStyles>(
    PopoverStyles.DEFAULT
  );
  // Email field
  const [email, setEmail] = useState(``);
  // Check if email is empty
  const [emailPopover, setEmailPopover] = useState<PopoverStyles>(
    PopoverStyles.DEFAULT
  );
  // Message field
  const [message, setMessage] = useState<string>('');
  // Check if msg is empty
  const [messagePopover, setMessagePopover] = useState<PopoverStyles>(
    PopoverStyles.DEFAULT
  );
  // Display characters left in text area
  const [charactersLeft, setcharactersLeft] = useState<number>(
    messageMaxLength
  );
  // Button state
  const [buttonStyle, setButtonStyle] = useState<StateStyle>(
    StateStyle.DEFAULT
  );

  // Email was sent
  const [isEmailSent, setIsEmailSent] = useState<StateStyle>(
    StateStyle.DEFAULT
  );

  /* UTILS */

  // Resetting form fields
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setcharactersLeft(messageMaxLength);
  };
  // Resetting notifications
  const resetNotifications = () => {
    setNamePopover(PopoverStyles.DEFAULT);
    setEmailPopover(PopoverStyles.DEFAULT);
    setMessagePopover(PopoverStyles.DEFAULT);
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
      setNamePopover(PopoverStyles.SUCCESS);
    } else {
      setName('');
      setNamePopover(PopoverStyles.FAILURE);
    }
    // Valdiating email field
    const emailValidation = regexCheck(email);
    if (emailValidation === true) {
      setEmail(email);
      setEmailPopover(PopoverStyles.SUCCESS);
    } else {
      // Here I'm NOT resetting the state because I think it's good to keep the email in there so user can check what's wrong
      setEmailPopover(PopoverStyles.FAILURE);
    }
    // Validating message field
    const messageValidation = emptyFieldValidator(message);
    if (messageValidation === true) {
      setMessage(message);
      setMessagePopover(PopoverStyles.SUCCESS);
    } else {
      setMessage('');
      setMessagePopover(PopoverStyles.FAILURE);
    }

    // If all fields are valid then change the button style to loading, reset all fields, try to send e-mail then let user know if e-mail was sent by changing the button style and displaying a notificiations
    if (
      nameValidation === true &&
      emailValidation === true &&
      messageValidation === true
    ) {
      // Set button style and email notificaiton to loading for when the POST request is processing
      setButtonStyle(StateStyle.LOADING);
      setIsEmailSent(StateStyle.LOADING);
      // Checking if email was sent
      const emailSent = await sendEmail(name, email, message);
      if (emailSent === true) {
        setButtonStyle(StateStyle.SUCCESS);
        setIsEmailSent(StateStyle.SUCCESS);
      } else {
        setIsEmailSent(StateStyle.FAILURE);
        setButtonStyle(StateStyle.FAILURE);
      }
      // Resetting form state and hiding notifications
      resetForm();
      resetNotifications();
    }
  };

  return (
    <StyledForm onSubmit={onSubmit} id={formId}>
      <StyledLabel htmlFor={FieldNames.NAME}>{contactNameField}</StyledLabel>
      <StyledInput
        type="text"
        onChange={onChange}
        name={FieldNames.NAME}
        value={name}
        placeholder={contactNameField}
      ></StyledInput>
      <NamePopover display={namePopover} />
      <StyledLabel htmlFor={FieldNames.EMAIL}>{contactEmailField}</StyledLabel>
      <StyledInput
        type="text"
        onChange={onChange}
        name={FieldNames.EMAIL}
        value={email}
        placeholder={contactEmailField}
      ></StyledInput>
      <EmailPopover display={emailPopover} />
      <StyledLabel htmlFor={FieldNames.MESSAGE}>
        {contactMessageField}
      </StyledLabel>
      <StyledTextArea
        rows={maxRows}
        maxLength={messageMaxLength}
        onChange={onChange}
        name={FieldNames.MESSAGE}
        value={message}
        placeholder={contactMessageField}
      ></StyledTextArea>
      <MessagePopover display={messagePopover} />
      <StyledCharactersLeft>
        {inputCharactersLeft}
        {charactersLeft}
      </StyledCharactersLeft>
      <SubmitButton
        type="submit"
        form={formId}
        style={buttonStyle}
      ></SubmitButton>
      <EmailSentNotification isEmailSent={isEmailSent}></EmailSentNotification>
    </StyledForm>
  );
};

export default ContactForm;
