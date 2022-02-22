import { FC } from 'react';
import { LocaleNames } from '../../features/localization/locales';
import { LanguageButton } from './LanguageButton';
import { StyledLanguage } from './navbar-styling';

export enum FlagNames {
  ENG = 'flag_ENG',
  JP = 'flag_JP',
  PL = 'flag_PL',
}

export enum AriaLables {
  ENG = 'Switch language to English',
  JP = 'Switch language to Japanese',
  PL = 'Switch language to Polish',
}

export const LanguageToggle: FC = () => (
  <StyledLanguage data-testid={'languagetoggle'}>
    <LanguageButton
      flagName={FlagNames.ENG}
      aria={AriaLables.ENG}
      localeName={LocaleNames.ENG}
    ></LanguageButton>
    <LanguageButton
      flagName={FlagNames.JP}
      aria={AriaLables.JP}
      localeName={LocaleNames.JP}
    ></LanguageButton>
    <LanguageButton
      flagName={FlagNames.PL}
      aria={AriaLables.PL}
      localeName={LocaleNames.PL}
    ></LanguageButton>
  </StyledLanguage>
);
