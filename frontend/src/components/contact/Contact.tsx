import React, { FC, useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Prompt } from 'react-router-dom';
import {
  localizationSelector,
  Locale,
} from '../../features/localization/localizationSlice';
import { sendEmail } from '../../utils/sendEmail';
// Styling
import { StyledWarning, StyledContainer } from './contact-styling';

// Input fields
enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}
// Setting opacity of warning fields
enum WarningDisplay {
  HIDE = 0,
  SHOW = 1,
}

const Contact: FC = (): JSX.Element => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const {
    buttonSend,
    contactH1,
    contactNameField,
    contactEmailField,
    contactMessageField,
    inputCharactersLeft,
    enterName,
    enterEmail,
    enterMessage,
    unsubmittedData,
  } = localization;
  // Text area max rows
  const maxRows = 8;
  // Max textarea character length
  const messageMaxLength = 256;

  // Name field
  const [name, setName] = useState(``);
  // Check if name is empty
  const [showNameWarning, setShowNameWarning] = useState(WarningDisplay.HIDE);
  // Email field
  const [email, setEmail] = useState(``);
  // Check if email is empty
  const [showEmailWarning, setShowEmailWarning] = useState(WarningDisplay.HIDE);
  // Message field
  const [message, setMessage] = useState('');
  // Check if msg is empty
  const [showMessageWarning, setShowMessageWarning] = useState(
    WarningDisplay.HIDE
  );
  // Display characters left in text area
  const [charactersLeft, setcharactersLeft] = useState(messageMaxLength);
  // Submit button state
  const [isDisabled, setIsDiabled] = useState(false);
  // Warning if user is trying to leave page with unsubmitted data
  const [isTryingToLeave, setIsTryingToLeave] = useState(false);

  // const localization = useSelector(localizationSelector);
  const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const targetValue = e.currentTarget.value;
    const targetName = e.currentTarget.name;

    if (targetName === FieldNames.NAME) setName(targetValue);
    if (targetName === FieldNames.EMAIL) setEmail(targetValue);
    if (targetName === FieldNames.MESSAGE) {
      // IMPORTANT: Make sure im working on e.currentTarget.value, NOT state
      setcharactersLeft(messageMaxLength - targetValue.length);
      setMessage(targetValue);
    }
    // Check if user is trying to leave the page with unsubmitted data
    if (targetValue !== '') setIsTryingToLeave(true);
    else setIsTryingToLeave(false);
  };
  // Checking if fields are empty
  const emptyFieldValidator = (content: string): boolean => {
    if (content === '') return false;
    else return true;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validating if fields are empty
    // name, email and message are states of fields (so e.currentTarget.value from onChange)
    const nameValidation = emptyFieldValidator(name);
    if (nameValidation === true) {
      setName(name);
      setShowNameWarning(WarningDisplay.HIDE);
    } else {
      setName('');
      setShowNameWarning(WarningDisplay.SHOW);
    }

    const emailValidation = emptyFieldValidator(email);
    if (emailValidation === true) {
      setEmail(email);
      setShowEmailWarning(WarningDisplay.HIDE);
    } else {
      setEmail('');
      setShowEmailWarning(WarningDisplay.SHOW);
    }

    const messageValidation = emptyFieldValidator(message);
    if (messageValidation === true) {
      setMessage(message);
      setShowMessageWarning(WarningDisplay.HIDE);
    } else {
      setMessage('');
      setShowMessageWarning(WarningDisplay.SHOW);
    }

    // If all fields are valid then disable button, reset all fields and (this is TODO) send e-mail and let user know if e-mail was sent
    if (
      nameValidation === true &&
      emailValidation === true &&
      messageValidation === true
    ) {
      // console.log(name);
      // console.log(email);
      // console.log(message);
      sendEmail(name, email, message);
      setName('');
      setShowNameWarning(WarningDisplay.HIDE);
      setEmail('');
      setShowEmailWarning(WarningDisplay.HIDE);
      setMessage('');
      setShowMessageWarning(WarningDisplay.HIDE);
      setIsDiabled(true);
      setIsTryingToLeave(false);
    }
  };

  return (
    <StyledContainer>
      <h1>{contactH1}</h1>
      <Prompt when={isTryingToLeave} message={unsubmittedData}></Prompt>
      <form onSubmit={onSubmit}>
        <label htmlFor={FieldNames.NAME}>{contactNameField}</label>
        <input
          type="text"
          onChange={onChange}
          name={FieldNames.NAME}
          value={name}
          placeholder={contactNameField}
        ></input>

        <StyledWarning display={showNameWarning}>{enterName}</StyledWarning>
        <label htmlFor={FieldNames.EMAIL}>{contactEmailField}</label>
        <input
          type="text"
          onChange={onChange}
          name={FieldNames.EMAIL}
          value={email}
          placeholder={contactEmailField}
        ></input>
        <StyledWarning display={showEmailWarning}>{enterEmail}</StyledWarning>
        <label htmlFor={FieldNames.MESSAGE}>{contactMessageField}</label>
        <textarea
          rows={maxRows}
          maxLength={messageMaxLength}
          onChange={onChange}
          name={FieldNames.MESSAGE}
          value={message}
          placeholder={contactMessageField}
        ></textarea>
        <StyledWarning display={showMessageWarning}>
          {enterMessage}
        </StyledWarning>
        <p>
          {inputCharactersLeft}
          {charactersLeft}
        </p>
        <input type="submit" value={buttonSend} disabled={isDisabled}></input>
      </form>
    </StyledContainer>
  );
};

export default Contact;
