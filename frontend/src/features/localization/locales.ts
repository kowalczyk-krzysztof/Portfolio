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
  aboutDescription: string;
  aboutTechnologies: string;
  aboutHobbies: string;
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
  aboutDescription: `My name is Krzysztof and I'm a full stack developer. When I code, my goal is to create useful and high quality products other people can enjoy. I spend a lot of time on the internet and because of that I know what people want to see. Finding the right balance between user experience and efficiency is a challenge, but I believe I have what it takes to achieve it. Give me a problem and I will find a solution.`,
  aboutTechnologies: `Technologies I'm familiar with:`,
  aboutHobbies: `In my free time I like to work on improving myself. I believe that staying fit has a huge impact on productivity, so I try to stay in shape. Learning languages is my hobby - knowing a language opens a whole new world and makes you grow as a person. Currently I can speak English and Polish fluently and I'm working on reaching fluency in Japanese.`,
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
  aboutDescription: `Nazywam się Krzysztof i jestem full stack developerem. Moim celem gdy programuję, jest tworzenie użytecznych i wysokiej jakości produktów, które będą sprawiać ludziom radość. Spędzam dużo czasu w internecie i dlatego wiem, czego oczekują użytkownicy. Uzyskanie odpowiedniego balansu pomiędzy wydajnością a zadowoleniem użytkownika to duże wyzwanie, jednak wierzę, że wiem jak jemu sprostać. Pokaż mi problem, a znajdę rozwiązanie.`,
  aboutTechnologies: `Technologie, których używam:`,
  aboutHobbies: `W wolnym czasie lubię pracować nad sobą. Uważam, że zdrowy tryb życia ma ogromny wpływ na produktywność, więc staram się żyć aktywnie. Moim hobby jest uczenie się języków - gdy poznasz obcy język, otwiera się przed tobą zupełnie nowy świat, co poszerza twoje horyzonty. Obecnie posługuje się biegle językiem angielskim i polskim oraz japońskim w stopniu zaawansowanym.`,
};
