import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  localizationSelector,
  SET_LOCALE,
  Locale,
} from '../../features/localization/localizationSlice';
import { LocaleNames } from '../../features/localization/locales';
// Styling
import { StyledLanguage, StyledLanguageButtons } from './navbar-styling';

const LanguageToggle: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const localization: Locale = useSelector(localizationSelector);
  // Thanks to currying I can pass a value in onClick
  const localizationHandler = (language: LocaleNames) => (
    e: MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    const newLocale: LocaleNames = language as LocaleNames;
    // This timeout here is needed because of how I implemented collapsing dropdown menu ( refer to clickAway method in MenuButton.tsx ) Without the timeout, the links in dropdown menu would get their names changed before the menu collapses, leading to a weird flash.
    if (localization.name !== newLocale)
      setTimeout(() => {
        dispatch(SET_LOCALE(newLocale));
      }, 101);
  };

  return (
    <StyledLanguage>
      <StyledLanguageButtons onClick={localizationHandler(LocaleNames.ENG)}>
        <img
          src={`${process.env.PUBLIC_URL}/flag_ENG.png`}
          alt="flag_ENG"
        ></img>
      </StyledLanguageButtons>
      <StyledLanguageButtons onClick={localizationHandler(LocaleNames.PL)}>
        <img src={`${process.env.PUBLIC_URL}/flag_PL.png`} alt="flag_PL"></img>
      </StyledLanguageButtons>
    </StyledLanguage>
  );
};

export default LanguageToggle;
