import { FC, useState, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import { EmailSentNotification } from './EmailSentNotification';
import { regexCheck } from '../../utils/regexEmail';
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

export enum WarningVisibility {
  SHOW = 1,
  HIDDEN = 0,
}

export enum EmailSendingStyle {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

enum FieldBorderStyle {
  DEFAULT = '#86B7FE',
  SUCCESS = '#198754',
  FAILURE = '#DC3545',
}

enum FieldShadowStyle {
  DEFAULT = '#C2DBFE',
  SUCCESS = '#C5E1D4',
  FAILURE = '#F6CCD0',
}

enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

type ContactStateOption =
  | WarningVisibility
  | FieldBorderStyle
  | FieldShadowStyle;

type FieldState<T extends ContactStateOption> = {
  [key in FieldNames]: T;
};

const serviceID = `${process.env.REACT_APP_EMAILJS_SERVICEID}`;
const templateID = `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`;
const userID = `${process.env.REACT_APP_EMAILJS_USERID}`;

export const ContactForm: FC = () => {
  const formId = 'contact';
  const maxRows = 5;
  const messageMaxLength = 256;

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

  const [warnings, setWarnings] = useState<FieldState<WarningVisibility>>({
    [FieldNames.NAME]: WarningVisibility.HIDDEN,
    [FieldNames.EMAIL]: WarningVisibility.HIDDEN,
    [FieldNames.MESSAGE]: WarningVisibility.HIDDEN,
  });

  const [borders, setBorders] = useState<FieldState<FieldBorderStyle>>({
    [FieldNames.NAME]: FieldBorderStyle.DEFAULT,
    [FieldNames.EMAIL]: FieldBorderStyle.DEFAULT,
    [FieldNames.MESSAGE]: FieldBorderStyle.DEFAULT,
  });

  const [shadows, setShadows] = useState<FieldState<FieldShadowStyle>>({
    [FieldNames.NAME]: FieldShadowStyle.DEFAULT,
    [FieldNames.EMAIL]: FieldShadowStyle.DEFAULT,
    [FieldNames.MESSAGE]: FieldShadowStyle.DEFAULT,
  });

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Display characters left in text area
  const [charactersLeft, setcharactersLeft] =
    useState<number>(messageMaxLength);
  // Email was sent
  const [isEmailSent, setIsEmailSent] = useState<EmailSendingStyle | string>(
    ''
  );
  // Resetting form fields
  const resetForm = (): void => {
    setName('');
    setEmail('');
    setMessage('');
    setcharactersLeft(messageMaxLength);
    setBorders({
      [FieldNames.NAME]: FieldBorderStyle.DEFAULT,
      [FieldNames.EMAIL]: FieldBorderStyle.DEFAULT,
      [FieldNames.MESSAGE]: FieldBorderStyle.DEFAULT,
    });
    setShadows({
      [FieldNames.NAME]: FieldShadowStyle.DEFAULT,
      [FieldNames.EMAIL]: FieldShadowStyle.DEFAULT,
      [FieldNames.MESSAGE]: FieldShadowStyle.DEFAULT,
    });
  };

  const resetWarnings = (): void => {
    setWarnings({
      [FieldNames.NAME]: WarningVisibility.HIDDEN,
      [FieldNames.EMAIL]: WarningVisibility.HIDDEN,
      [FieldNames.MESSAGE]: WarningVisibility.HIDDEN,
    });
  };

  const valueCheck = (fieldName: FieldNames, value: string | boolean): void => {
    setWarnings({
      ...warnings,
      [fieldName]: value ? WarningVisibility.HIDDEN : WarningVisibility.SHOW,
    });
    setBorders({
      ...borders,
      [fieldName]: value ? FieldBorderStyle.SUCCESS : FieldBorderStyle.FAILURE,
    });
    setShadows({
      ...shadows,
      [fieldName]: value ? FieldShadowStyle.SUCCESS : FieldShadowStyle.FAILURE,
    });
  };

  const onChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const targetValue = e.currentTarget.value;
    const targetName = e.currentTarget.name;

    if (targetName === FieldNames.NAME) {
      setName(targetValue);
      valueCheck(targetName, targetValue);
    }
    if (targetName === FieldNames.EMAIL) {
      setEmail(targetValue);
      valueCheck(targetName, regexCheck(targetValue));
    }
    if (targetName === FieldNames.MESSAGE) {
      setcharactersLeft(messageMaxLength - targetValue.length);
      setMessage(targetValue);
      valueCheck(targetName, targetValue);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const emailValidation: boolean = regexCheck(email);

    if (!name)
      setWarnings((warnings) => ({
        ...warnings,
        [FieldNames.NAME]: WarningVisibility.SHOW,
      }));

    if (!emailValidation)
      setWarnings((warnings) => ({
        ...warnings,
        [FieldNames.EMAIL]: WarningVisibility.SHOW,
      }));

    if (!message)
      setWarnings((warnings) => ({
        ...warnings,
        [FieldNames.MESSAGE]: WarningVisibility.SHOW,
      }));

    if (name && emailValidation && message) {
      setIsEmailSent(EmailSendingStyle.LOADING);
      const res: EmailJSResponseStatus = await emailjs.send(
        serviceID,
        templateID,
        { name, email, message },
        userID
      );
      if (res?.status === 200) {
        setIsEmailSent(EmailSendingStyle.SUCCESS);
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
          shadow={shadows[FieldNames.NAME]}
          border={borders[FieldNames.NAME]}
          type="text"
          onChange={onChange}
          name={FieldNames.NAME}
          value={name}
          placeholder={contactNameField}
          data-testid={'contactformname'}
        ></StyledInput>
        <StyledNotificationWarning visibility={warnings[FieldNames.NAME]}>
          {enterName}
        </StyledNotificationWarning>
      </StyledFormElement>
      <StyledFormElement>
        <StyledLabel htmlFor={FieldNames.EMAIL}>
          {contactEmailField}
        </StyledLabel>
        <StyledInput
          shadow={shadows[FieldNames.EMAIL]}
          border={borders[FieldNames.EMAIL]}
          type="email"
          onChange={onChange}
          name={FieldNames.EMAIL}
          value={email}
          placeholder={contactEmailField}
          data-testid={'contactformemail'}
        ></StyledInput>
        <StyledNotificationWarning visibility={warnings[FieldNames.EMAIL]}>
          {invalidEmail}
        </StyledNotificationWarning>
      </StyledFormElement>
      <StyledFormElement>
        <StyledLabel htmlFor={FieldNames.MESSAGE}>
          {contactMessageField}
        </StyledLabel>
        <StyledTextArea
          shadow={shadows[FieldNames.MESSAGE]}
          border={borders[FieldNames.MESSAGE]}
          rows={maxRows}
          maxLength={messageMaxLength}
          onChange={onChange}
          name={FieldNames.MESSAGE}
          value={message}
          placeholder={contactMessageField}
          data-testid={'contactformemessage'}
        ></StyledTextArea>
        <StyledNotificationWarning visibility={warnings[FieldNames.MESSAGE]}>
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
