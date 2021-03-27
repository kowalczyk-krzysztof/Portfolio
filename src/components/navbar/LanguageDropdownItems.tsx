import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  localizationSelector,
  SET_LOCALE,
} from '../../features/localization/localizationSlice';
import { LocaleNames } from '../../features/localization/locales';
// Styling
import { StyledDropdownContent } from './navbar-styling';

const LanguageDropdownItems: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const localization = useSelector(localizationSelector);

  // Thanks to currying I can pass a value in onClick
  const localizationHandler = (language: LocaleNames) => (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const newLocale = language as LocaleNames;

    if (localization.name !== newLocale) dispatch(SET_LOCALE(newLocale));
  };

  return (
    <StyledDropdownContent>
      <button onClick={localizationHandler(LocaleNames.ENG)}>
        <img
          src={`${process.env.PUBLIC_URL}/flag_ENG.png`}
          alt="flag_ENG"
        ></img>
      </button>
      <button onClick={localizationHandler(LocaleNames.PL)}>
        <img src={`${process.env.PUBLIC_URL}/flag_PL.png`} alt="flag_PL"></img>
      </button>
    </StyledDropdownContent>
  );
};

export default LanguageDropdownItems;
