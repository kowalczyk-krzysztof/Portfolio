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
  contactH1: `Lets talk`,
  contactNameField: `Full name`,
  contactEmailField: `Email`,
  contactMessageField: 'Your message',
  inputCharactersLeft: 'Characters left:  ',
  enterName: 'Please enter your name',
  invalidEmail: 'Invalid email format',
  enterMessage: `Message field can't be empty`,
  sendEmailLoading: `Sending email...`,
  sendEmailSuccess: 'Email was sent',
  sendEmailFailure: 'Email was not sent',
  contactMeText: 'Send an email or message me on my social media profiles',
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
  contactEmailField: `Email`,
  contactMessageField: `Twoja wiadomość`,
  inputCharactersLeft: `Pozostałe znaki:  `,
  enterName: 'Wprowadź swoje imię i nazwisko',
  invalidEmail: 'Niepoprawny format adresu email',
  enterMessage: 'Wiadomość nie może być pusta',
  sendEmailLoading: `Wysyłam email...`,
  sendEmailSuccess: 'Email został wysłany',
  sendEmailFailure: 'Nie udało się wysłać emaila',
  contactMeText: 'Wyślij email lub napisz do mnie na jednym z moich profili',
};
