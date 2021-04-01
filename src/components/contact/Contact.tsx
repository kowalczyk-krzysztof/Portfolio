import React, { FC, useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  localizationSelector,
  Locale,
} from '../../features/localization/localizationSlice';

enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
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
  } = localization;
  // Text area max rows
  const maxRows = 8;
  // Max textarea character length
  const messageMaxLength = 256;

  // Name field
  const [name, setName] = useState(``);
  // Email field
  const [email, setEmail] = useState(``);
  // Message field
  const [message, setMessage] = useState('');
  const [charactersLeft, setcharactersLeft] = useState(messageMaxLength);

  // Submit button state
  const [isDisabled, setIsDiabled] = useState(false);
  // const localization = useSelector(localizationSelector);
  const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const targetValue = e.currentTarget.value;
    const targetName = e.currentTarget.name;
    // Has to be - 1 because I want to return the characters left, not maxlength

    if (targetName === FieldNames.NAME) setName(targetValue);
    if (targetName === FieldNames.EMAIL) setEmail(targetValue);
    if (targetName === FieldNames.MESSAGE) {
      // IMPORTANT: Make sure im working on e.currentTarget.value, NOT state
      setcharactersLeft(messageMaxLength - targetValue.length);
      setMessage(targetValue);
    }
  };
  //
  const fieldLengthValidator = (
    content: string,
    fieldName: FieldNames
  ): boolean => {
    let message;

    if (fieldName === FieldNames.NAME) message = enterName;

    if (fieldName === FieldNames.EMAIL) message = enterEmail;

    if (fieldName === FieldNames.MESSAGE) message = enterMessage;

    if (content.length === 0) {
      alert(message);
      return false;
    } else return true;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validating if fields are empty
    // name, email and message are states of fields (so e.currentTarget.value from onChange)
    const nameValidation = fieldLengthValidator(name, FieldNames.NAME);
    if (nameValidation === true) setName(name);
    else setName('');

    const emailValidation = fieldLengthValidator(email, FieldNames.EMAIL);
    if (emailValidation === true) setEmail(email);
    else setEmail('');

    const messageValidation = fieldLengthValidator(message, FieldNames.MESSAGE);
    if (messageValidation === true) setMessage(message);
    else setMessage('');

    // If all fields are valid then disable button, reset all fields and (this is TODO) send e-mail and let user know if e-mail was sent
    if (
      nameValidation === true &&
      emailValidation === true &&
      messageValidation === true
    ) {
      setName('');
      setEmail('');
      setMessage('');
      setIsDiabled(true);
    }
  };

  return (
    <main>
      <h1>{contactH1}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor={FieldNames.NAME}>{contactNameField}</label>
        <input
          type="text"
          onChange={onChange}
          name={FieldNames.NAME}
          value={name}
          placeholder={contactNameField}
        ></input>
        <label htmlFor={FieldNames.EMAIL}>{contactEmailField}</label>
        <input
          type="text"
          onChange={onChange}
          name={FieldNames.EMAIL}
          value={email}
          placeholder={contactEmailField}
        ></input>
        <label htmlFor={FieldNames.MESSAGE}>{contactMessageField}</label>
        <textarea
          rows={maxRows}
          maxLength={messageMaxLength}
          onChange={onChange}
          name={FieldNames.MESSAGE}
          value={message}
          placeholder={contactMessageField}
        ></textarea>
        <p>
          {inputCharactersLeft}
          {charactersLeft}
        </p>
        <input type="submit" value={buttonSend} disabled={isDisabled}></input>
      </form>
    </main>
  );
};

export default Contact;
