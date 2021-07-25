// Testing libraries
import { render, screen } from '@testing-library/react';
// React router
import { MemoryRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createTestStore } from '../../app/store';
import { SET_LOCALE } from '../../features/localization/localizationSlice';
import {
  Locale,
  LocaleNames,
  locale_ENG,
  locale_JP,
} from '../../features/localization/locales';
// Components
import { ContactTitle } from './ContactTitle';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing contact title', () => {
  test('contact title rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactTitle />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('contacttitle')).toBeInTheDocument();
  });
  test('contact title having correct text', () => {
    let state: Locale = store.getState().localization.locale;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactTitle />
        </MemoryRouter>
      </Provider>
    );
    const contactText: HTMLElement | null =
      screen.queryByTestId('contacttitletext');
    expect(queryByTestId('contacttitle')).toBeInTheDocument();
    expect(state).toEqual(locale_ENG);
    expect(contactText).toHaveTextContent(`Lets talk`);
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_JP);
    expect(contactText).toHaveTextContent(`話しましょう`);
  });
});
