import { Locale } from './localizationSlice';
// Values for locale names
export enum LocaleNames {
  ENG = 'ENG',
  PL = 'PL',
}

export const locale_EN: Locale = {
  name: LocaleNames.ENG,
  navbarHome: 'Home',
  navbarAbout: 'About',
  navbarContact: 'Contact',
  aboutH1: 'My portfolio',
};
export const locale_PL: Locale = {
  name: LocaleNames.PL,
  navbarHome: 'Strona Główna',
  navbarAbout: 'O mnie',
  navbarContact: 'Kontakt',
  aboutH1: 'Moje portfolio',
};
