// Values for locale names
export enum LocaleNames {
  ENG = 'ENG',
  PL = 'PL',
}
// Locale interface
export interface Locale {
  name: LocaleNames;
  navbarHome: string;
  navbarAbout: string;
  navbarContact: string;
  homeH1: string;
  homeH2: string;
  homeDescription: string;
  homePassion: string;
  learnMore: string;
  buttonSend: string;
  contactH1: string;
  contactNameField: string;
  contactEmailField: string;
  contactMessageField: string;
  inputCharactersLeft: string;
  enterName: string;
  invalidEmail: string;
  enterMessage: string;
  sendEmailLoading: string;
  sendEmailSuccess: string;
  sendEmailFailure: string;
  contactMeText: string;
}

// English locale
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
  inputCharactersLeft: 'Characters left:  ',
  enterName: 'Please enter your name',
  invalidEmail: 'Invalid e-mail format',
  enterMessage: `Message field can't be empty`,
  sendEmailLoading: `Sending e-mail...`,
  sendEmailSuccess: 'E-mail was sent',
  sendEmailFailure: 'E-mail was not sent - try again later',
  contactMeText: 'You can also find me on:',
};
// Polish locale
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
  inputCharactersLeft: `Pozostałe znaki:  `,
  enterName: 'Wprowadź swoje imię i nazwisko',
  invalidEmail: 'Niepoprawny format adresu email',
  enterMessage: 'Wiadomość nie może być pusta',
  sendEmailLoading: `Wysyłam e-mail...`,
  sendEmailSuccess: 'E-mail został wysłany',
  sendEmailFailure: 'Nie udało się wysłać e-maila - spróbuj ponownie później',
  contactMeText: 'Znajdziesz mnie także na:',
};
