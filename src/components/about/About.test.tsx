import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { About } from './About';
import { darkTheme, lightTheme, ThemeNames } from '../../createGlobalStyle';
import {
  SET_THEME,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';
import { SET_LOCALE } from '../../features/localization/localizationSlice';
import {
  Locale,
  LocaleNames,
  locale_ENG,
  locale_JP,
} from '../../features/localization/locales';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing about main container', () => {
  test('about main container rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('about')).toBeInTheDocument();
  });
  test('about main container having correct theme', () => {
    let state: ThemeProps = store.getState().themeToggle.theme;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('about')).toBeInTheDocument();
    expect(state).toEqual(lightTheme);
    const description: HTMLElement | null =
      screen.queryByTestId('aboutdescription');
    expect(description).toHaveStyle('background: #d6e9f5');
    store.dispatch(SET_THEME(ThemeNames.DARK));
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(darkTheme);
    expect(description).toHaveStyle('background: #1B263B');
  });
  test('about main container having correct text', () => {
    let state: Locale = store.getState().localization.locale;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </Provider>
    );
    const description: HTMLElement | null =
      screen.queryByTestId('aboutdescription');
    expect(queryByTestId('about')).toBeInTheDocument();
    expect(state).toEqual(locale_ENG);
    expect(description).toHaveTextContent(
      `My name is Krzysztof and I'm a full stack developer. When I code, my goal is to create useful and high quality products other people can enjoy. I spend a lot of time on the internet and because of that I know what people want to see. Finding the right balance between user experience and efficiency is a challenge, but I believe I have what it takes to achieve it. Give me a problem and I will find a solution.`
    );
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_JP);
    expect(description).toHaveTextContent(
      `Krzysztofです｡ フルスタック開発者｡ なぜソフトウェア開発しますか？ 私の目指しはお役に立てる高品質のソフトウェアをお客様に届けることです｡ オンラインで多くの時間を過ごすのでインターネットユーザーの欲しい物をよく分かります｡ 効率とユーザーエクスペリエンスのバランスを見つけるのは本当に難しいことです｡ でも私はそれをできると信じています｡ 問題があるなら直ぐに解決します｡`
    );
  });
});
