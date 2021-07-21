import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FlexLinkList } from './FlexLinkList';
import {
  SET_LOCALE,
  Localization,
} from '../../features/localization/localizationSlice';
import {
  locale_ENG,
  LocaleNames,
  locale_JP,
} from '../../features/localization/locales';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing link list', () => {
  test('testing link list rendering at > 768 width', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 769,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <FlexLinkList />
        </MemoryRouter>
      </Provider>
    );
    expect(window.innerWidth).toEqual(769);
    expect(queryByTestId('flexlinklist')).toBeInTheDocument();
  });
  test('testing language content', () => {
    let state: Localization = store.getState().localization;
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <FlexLinkList />
        </MemoryRouter>
      </Provider>
    );
    const home: HTMLElement | null = screen.queryByTestId('flexhomelink');
    expect(home).toBeInTheDocument();
    expect(state.locale).toEqual(locale_ENG);
    expect(home).toHaveTextContent('Home');
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('flexlinklist')).toBeInTheDocument();
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization;
    expect(state.locale).toEqual(locale_JP);
    expect(home).toHaveTextContent('ホーム');
  });
});
