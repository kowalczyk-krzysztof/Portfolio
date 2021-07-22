import { FC, useState, FormEvent } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Components
import { EmailSentNotification } from './EmailSentNotification';
// Utils
import { sendEmail } from '../../utils/sendEmail';
import { regexCheck } from '../../utils/regexEmail';
// Styling
import {
  StyledLabel,
  StyledTextArea,
  StyledInput,
  StyledForm,
  StyledCharactersLeft,
  StyledFormElement,
  StyledNotificationWarning,
  StyledSubmitButton,
  StyledButtonContainer,
} from './contact-styling';
import { EmailJSResponseStatus } from 'emailjs-com';

// Warning visibility
export enum WarningVisibility {
  SHOW = 1,
  HIDDEN = 0,
}
// Field border
enum FieldBorderStyle {
  DEFAULT = '#86B7FE',
  SUCCESS = '#198754',
  FAILURE = '#DC3545',
}
// Field box shadow
enum FieldShadowStyle {
  DEFAULT = '#C2DBFE',
  SUCCESS = '#C5E1D4',
  FAILURE = '#F6CCD0',
}

// Input fields
enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}
// Button styles
export enum EmailSendingStyle {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export const ContactForm: FC = (): JSX.Element => {
  /* FORM SETTINGS */

  // Form id
  const formId: string = 'contact';
  // Text area max rows
  const maxRows: number = 5;
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
    buttonSend,
  } = localization;

  /*                                  STATES                                        */

  /* 
      NAME FIELD  
  */

  // State of input
  const [name, setName] = useState<string>(``);
  // Check whether to display warning or not
  const [nameWarning, setNameWarning] = useState<WarningVisibility>(
    WarningVisibility.HIDDEN
  );
  // Setting border for name field
  const [nameBorder, setNameBorder] = useState<FieldBorderStyle>(
    FieldBorderStyle.DEFAULT
  );
  // Setting box shadow for name field
  const [nameShadow, setNameShadow] = useState<FieldShadowStyle>(
    FieldShadowStyle.DEFAULT
  );

  /* 
      EMAIL FIELD  
  */

  // State of input
  const [email, setEmail] = useState<string>(``);
  // Check if email is empty
  const [emailWarning, setEmailWarning] = useState<WarningVisibility>(
    WarningVisibility.HIDDEN
  );
  // Setting border for email field
  const [emailBorder, setEmailBorder] = useState<FieldBorderStyle>(
    FieldBorderStyle.DEFAULT
  );
  // Setting box shadow for email field
  const [emailShadow, setEmailShadow] = useState<FieldShadowStyle>(
    FieldShadowStyle.DEFAULT
  );

  /* 
      MESSAGE FIELD  
  */

  // State of input
  const [message, setMessage] = useState<string>('');
  // Check if message is empty
  const [messageWarning, setMessageWarning] = useState<WarningVisibility>(
    WarningVisibility.HIDDEN
  );
  // Setting border for message field
  const [messageBorder, setMessageBorder] = useState<FieldBorderStyle>(
    FieldBorderStyle.DEFAULT
  );
  // Setting box shadow for message field
  const [messageShadow, setMessageShadow] = useState<FieldShadowStyle>(
    FieldShadowStyle.DEFAULT
  );
  // Display characters left in text area
  const [charactersLeft, setcharactersLeft] =
    useState<number>(messageMaxLength);

  // Email was sent
  const [isEmailSent, setIsEmailSent] = useState<EmailSendingStyle | string>(
    ''
  );

  /* UTILS */

  // Resetting form fields
  const resetForm = (): void => {
    setName('');
    setEmail('');
    setMessage('');
    setcharactersLeft(messageMaxLength);
    setNameBorder(FieldBorderStyle.DEFAULT);
    setNameShadow(FieldShadowStyle.DEFAULT);
    setEmailBorder(FieldBorderStyle.DEFAULT);
    setEmailShadow(FieldShadowStyle.DEFAULT);
    setMessageBorder(FieldBorderStyle.DEFAULT);
    setMessageShadow(FieldShadowStyle.DEFAULT);
  };
  // Resetting warnings
  const resetWarnings = (): void => {
    setNameWarning(WarningVisibility.HIDDEN);
    setEmailWarning(WarningVisibility.HIDDEN);
    setMessageWarning(WarningVisibility.HIDDEN);
  };

  /* FORM METHODS */

  // On change
  const onChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const targetValue: string = e.currentTarget.value;
    const targetName: string = e.currentTarget.name;
    // Assigning values to respective states
    if (targetName === FieldNames.NAME) {
      setName(targetValue);
      if (targetValue === '') {
        setNameWarning(WarningVisibility.SHOW);
        setNameBorder(FieldBorderStyle.FAILURE);
        setNameShadow(FieldShadowStyle.FAILURE);
      } else {
        setNameWarning(WarningVisibility.HIDDEN);
        setNameBorder(FieldBorderStyle.SUCCESS);
        setNameShadow(FieldShadowStyle.SUCCESS);
      }
    }
    if (targetName === FieldNames.EMAIL) {
      setEmail(targetValue);
      if (regexCheck(targetValue) === false) {
        setEmailWarning(WarningVisibility.SHOW);
        setEmailBorder(FieldBorderStyle.FAILURE);
        setEmailShadow(FieldShadowStyle.FAILURE);
      } else {
        setEmailWarning(WarningVisibility.HIDDEN);
        setEmailBorder(FieldBorderStyle.SUCCESS);
        setEmailShadow(FieldShadowStyle.SUCCESS);
      }
    }
    if (targetName === FieldNames.MESSAGE) {
      // IMPORTANT: Make sure im doing the math for characters left on e.currentTarget.value, NOT state
      setcharactersLeft(messageMaxLength - targetValue.length);
      setMessage(targetValue);
      if (targetValue === '') {
        setMessageWarning(WarningVisibility.SHOW);
        setMessageBorder(FieldBorderStyle.FAILURE);
        setMessageShadow(FieldShadowStyle.FAILURE);
      } else {
        setMessageWarning(WarningVisibility.HIDDEN);
        setMessageBorder(FieldBorderStyle.SUCCESS);
        setMessageShadow(FieldShadowStyle.SUCCESS);
      }
    }
  };

  // On submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    /* VALIDATING FIELDS 
      name, email and message are states of fields (so e.currentTarget.value from onChange)
    */

    // Validating name field
    if (name !== '') setName(name);
    else setNameWarning(WarningVisibility.SHOW);

    // Valdiating email field
    const emailValidation = regexCheck(email);
    if (emailValidation === true) setEmail(email);
    else setEmailWarning(WarningVisibility.SHOW);

    // Validating message field
    if (message !== '') setMessage(message);
    else setMessageWarning(WarningVisibility.SHOW);

    // If all fields are valid then change the button style to loading, reset all fields, try to send email then let user know if email was sent by changing the button style and displaying a notificiations
    if (name !== '' && emailValidation === true && message !== '') {
      // Set email notificaiton to loading for when the POST request is processing

      setIsEmailSent(EmailSendingStyle.LOADING);
      // Checking if email was sent
      const res: EmailJSResponseStatus = await sendEmail(name, email, message);
      if (res?.status === 200) {
        setIsEmailSent(EmailSendingStyle.SUCCESS);
        // Resetting form state and hiding notifications
        resetForm();
        resetWarnings();
      } else {
        setIsEmailSent(EmailSendingStyle.FAILURE);
      }
    }
  };

  return (
    <StyledForm onSubmit={onSubmit} id={formId} data-testid={'contactform'}>
      <StyledFormElement>
        <StyledLabel htmlFor={FieldNames.NAME}>{contactNameField}</StyledLabel>
        <StyledInput
          shadow={nameShadow}
          border={nameBorder}
          type="text"
          onChange={onChange}
          name={FieldNames.NAME}
          value={name}
          placeholder={contactNameField}
          data-testid={'contactformname'}
        ></StyledInput>
        <StyledNotificationWarning visibility={nameWarning}>
          {enterName}
        </StyledNotificationWarning>
      </StyledFormElement>
      <StyledFormElement>
        <StyledLabel htmlFor={FieldNames.EMAIL}>
          {contactEmailField}
        </StyledLabel>
        <StyledInput
          shadow={emailShadow}
          border={emailBorder}
          type="email"
          onChange={onChange}
          name={FieldNames.EMAIL}
          value={email}
          placeholder={contactEmailField}
          data-testid={'contactformemail'}
        ></StyledInput>
        <StyledNotificationWarning visibility={emailWarning}>
          {invalidEmail}
        </StyledNotificationWarning>
      </StyledFormElement>
      <StyledFormElement>
        <StyledLabel htmlFor={FieldNames.MESSAGE}>
          {contactMessageField}
        </StyledLabel>
        <StyledTextArea
          shadow={messageShadow}
          border={messageBorder}
          rows={maxRows}
          maxLength={messageMaxLength}
          onChange={onChange}
          name={FieldNames.MESSAGE}
          value={message}
          placeholder={contactMessageField}
          data-testid={'contactformemessage'}
        ></StyledTextArea>
        <StyledNotificationWarning visibility={messageWarning}>
          {enterMessage}
        </StyledNotificationWarning>
        <StyledCharactersLeft>
          {inputCharactersLeft}
          {charactersLeft}
        </StyledCharactersLeft>
      </StyledFormElement>
      <StyledButtonContainer>
        <StyledSubmitButton
          type="submit"
          form={formId}
          aria-label="Submit form"
        >
          {buttonSend}
        </StyledSubmitButton>
        <EmailSentNotification
          isEmailSent={isEmailSent}
        ></EmailSentNotification>
      </StyledButtonContainer>
    </StyledForm>
  );
};
