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
import { ContactLinks } from './ContactLinks';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing footer contact list', () => {
  test('footer contact list rendering properly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactLinks />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByTestId('footercontact')).toBeInTheDocument();
  });
  test('footer contact list having correct text', () => {
    let state: Locale = store.getState().localization.locale;
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactLinks />
        </MemoryRouter>
      </Provider>
    );
    const contact: HTMLElement | null =
      screen.queryByTestId('footercontacttext');
    expect(queryByTestId('footercontact')).toBeInTheDocument();
    expect(state).toEqual(locale_ENG);
    expect(contact).toHaveTextContent(`Contact`);
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_JP);
    expect(contact).toHaveTextContent(`お問い合わせ`);
  });
});
