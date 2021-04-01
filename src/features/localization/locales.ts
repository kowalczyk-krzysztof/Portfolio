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
  homeH1: 'Hey!',
  homeH2: `I'm Krzysztof`,
  homeDescription: `Full stack developer `,
  homePassion: 'WebDev is my passion',
  learnMore: 'Learn More',
};
export const locale_PL: Locale = {
  name: LocaleNames.PL,
  navbarHome: 'Strona Główna',
  navbarAbout: 'O mnie',
  navbarContact: 'Kontakt',
  homeH1: 'Hej!',
  homeH2: 'Jestem Krzysztof',
  homeDescription: 'Full stack developer',
  homePassion: 'WebDev to moja pasja',
  learnMore: 'Poznaj Mnie',
};
