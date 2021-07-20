import { FC, MouseEvent } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  localizationSelector,
  SET_LOCALE,
} from '../../features/localization/localizationSlice';
import { LocaleNames, Locale } from '../../features/localization/locales';
// Styling
import { StyledLanguageButtons } from './navbar-styling';

interface LanguageButtonProps {
  localeName: LocaleNames;
  flagName: string;
  aria: string;
}

export const LanguageButton: FC<LanguageButtonProps> = ({
  localeName,
  flagName,
  aria,
}): JSX.Element => {
  const dispatch = useDispatch();
  const localization: Locale = useSelector(localizationSelector);
  // Thanks to currying I can pass a value in onClick
  const localizationHandler =
    (language: LocaleNames) =>
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      const newLocale: LocaleNames = language as LocaleNames;
      // This timeout here is needed because of how I implemented collapsing dropdown menu ( refer to clickAway method in MenuButton.tsx ) Without the timeout, the links in dropdown menu would get their names changed before the menu collapses, leading to a weird flash.
      if (localization.name !== newLocale)
        setTimeout(() => {
          dispatch(SET_LOCALE(newLocale));
        }, 101);
    };

  return (
    <StyledLanguageButtons
      onClick={localizationHandler(localeName)}
      data-testid={'languagetogglebutton'}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${flagName}.png`}
        alt={flagName}
        role="button"
        aria-label={aria}
        width="32px"
        height="32px"
      ></img>
    </StyledLanguageButtons>
  );
};
