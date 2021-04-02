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
  buttonSend: 'Submit >',
  contactH1: `Let's talk`,
  contactNameField: `Full name`,
  contactEmailField: `E-mail`,
  contactMessageField: 'Your message',
  inputCharactersLeft: 'Characters left: ',
  enterName: 'Please enter your name',
  enterEmail: 'Please enter your e-mail',
  enterMessage: `Message field can't be empty`,
  unsubmittedData: `You have some unsubmitted data, are you sure you want to leave?`,
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
  buttonSend: 'Wyślij >',
  contactH1: 'Porozmawiajmy',
  contactNameField: `Imię i nazwisko`,
  contactEmailField: `E-mail`,
  contactMessageField: `Twoja wiadomość`,
  inputCharactersLeft: `Pozostałe znaki: `,
  enterName: 'Wprowadź swoje imię i nazwisko',
  enterEmail: 'Wprowadź swój email',
  enterMessage: 'Wiadomość nie może być pusta',
  unsubmittedData: `Na pewno chcesz wyjść? Niezapisane dane zostaną utracone`,
};
