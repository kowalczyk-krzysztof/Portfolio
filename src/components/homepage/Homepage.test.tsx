// Testing libraries
import { render, screen } from '@testing-library/react';
// React router
import { MemoryRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
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
// Components
import { Homepage } from './Homepage';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing homepage', () => {
  test('homepage rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('homepage')).toBeInTheDocument();
  });
  test('homepage having correct theme', () => {
    let state: ThemeProps = store.getState().themeToggle.theme;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('homepage')).toBeInTheDocument();
    expect(state).toEqual(lightTheme);
    expect(queryByTestId('homepage')).toHaveStyle('background: #d6e9f5');
    store.dispatch(SET_THEME(ThemeNames.DARK));
    state = store.getState().themeToggle.theme;
    expect(state).toEqual(darkTheme);
    expect(queryByTestId('homepage')).toHaveStyle('background: #1B263B');
  });
  test('homepage having correct text', () => {
    let state: Locale = store.getState().localization.locale;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Provider>
    );
    const homeH1: HTMLElement | null = screen.queryByTestId('homepageh1');
    expect(queryByTestId('homepage')).toBeInTheDocument();
    expect(state).toEqual(locale_ENG);
    expect(homeH1).toHaveTextContent('Hey!');
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_JP);
    expect(homeH1).toHaveTextContent('はじめまして！');
  });
});
