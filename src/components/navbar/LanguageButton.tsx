import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  localizationSelector,
  SET_LOCALE,
} from '../../features/localization/localizationSlice';
import { LocaleNames, Locale } from '../../features/localization/locales';
import { StyledLanguageButtons } from './navbar-styling';

type Props = {
  readonly localeName: LocaleNames;
  readonly flagName: string;
  readonly aria: string;
};

export const LanguageButton: FC<Props> = ({ localeName, flagName, aria }) => {
  const dispatch = useDispatch();
  const localization: Locale = useSelector(localizationSelector);

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
        width="40px"
        height="40px"
      ></img>
    </StyledLanguageButtons>
  );
};
