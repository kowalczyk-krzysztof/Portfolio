// Values for locale names
export enum LocaleNames {
  ENG = 'ENG',
  PL = 'PL',
  JP = 'JP',
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
  enterMessage: `Please enter your message`,
  sendEmailLoading: `Sending email...`,
  sendEmailSuccess: 'Email was sent',
  sendEmailFailure: 'Email was not sent',
  contactMeText: 'Send an email or message me on my social media profiles',
  aboutDescription: `My name is Krzysztof and I'm a full stack developer. When I code, my goal is to create useful and high quality products other people can enjoy. I spend a lot of time on the internet and because of that I know what people want to see. Finding the right balance between user experience and efficiency is a challenge, but I believe I have what it takes to achieve it. Give me a problem and I will find a solution.`,
  aboutTechnologies: `Technologies I use:`,
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
  enterMessage: 'Wprowadź swoją wiadomość',
  sendEmailLoading: `Wysyłam email...`,
  sendEmailSuccess: 'Email został wysłany',
  sendEmailFailure: 'Nie udało się wysłać emaila',
  contactMeText: 'Wyślij email lub napisz do mnie na jednym z moich profili',
  aboutDescription: `Nazywam się Krzysztof i jestem full stack developerem. Moim celem gdy programuję, jest tworzenie użytecznych i wysokiej jakości produktów, które będą sprawiać ludziom radość. Spędzam dużo czasu w internecie i dlatego wiem, czego oczekują użytkownicy. Uzyskanie odpowiedniego balansu pomiędzy wydajnością a zadowoleniem użytkownika to duże wyzwanie, jednak wierzę, że wiem jak jemu sprostać. Pokaż mi problem, a znajdę rozwiązanie.`,
  aboutTechnologies: `Technologie, których używam:`,
  aboutHobbies: `W wolnym czasie lubię pracować nad sobą. Uważam, że zdrowy tryb życia ma ogromny wpływ na produktywność, więc staram się żyć aktywnie. Moim hobby jest uczenie się języków - gdy poznasz obcy język, otwiera się przed tobą zupełnie nowy świat, co poszerza twoje horyzonty. Obecnie posługuje się biegle językiem angielskim i polskim oraz japońskim w stopniu zaawansowanym.`,
};
// Japanese locale
export const locale_JP: Locale = {
  name: LocaleNames.JP,
  navbarHome: 'ホーム',
  navbarAbout: '私について',
  navbarContact: 'お問い合わせ',
  homeH1: ' はじめまして！',
  homeH2: `Krzysztofです`,
  homeDescription: `フルスタック開発者`,
  homePassion: 'Web開発は私の情熱です',
  learnMore: 'さらに詳しく',
  buttonSend: '送信 >',
  contactH1: `話しましょう`,
  contactNameField: `お名前`,
  contactEmailField: `メールアドレス`,
  contactMessageField: 'メッセージ本文',
  inputCharactersLeft: '残り文字数:  ',
  enterName: 'お名前を入力してください',
  invalidEmail: '無効なメール形式',
  enterMessage: `メッセージを入力してください`,
  sendEmailLoading: `送信中｡｡｡`,
  sendEmailSuccess: 'メールが送信されました',
  sendEmailFailure: 'メールが送信できませんでした',
  contactMeText: 'メールを送信またはSNSでのご連絡します',
  aboutDescription: `Krzysztofです｡フルスタック開発者｡ 何故ソフトウェアを発生しますか？ お役に立てる高品質のソフトウェアをお客様に届けることが私の目指しです｡ オンラインで多くの時間を過ごします｡ ですからインターネットユーザーの欲しい物をよく分かります｡ 効率とユーザーエクスペリエンスのバランスを見つけるのは本当に難しいことです｡ でも私はそれをできると信じています｡ 問題があるなら絶対に解決します｡`,
  aboutTechnologies: `下の技術を使用しています:`,
  aboutHobbies: `空き時間に自分磨きをしています｡ 生産性と健康状態の関連があると思います｡ですから健康な生活を送る｡ 外国語を学ぶことが大好きです｡ 可能性が広がり自分を成長させたりできる｡ 今は英語とポーランド語が話せる｡ 日本語がペラペラになるように頑張っています｡`,
};
