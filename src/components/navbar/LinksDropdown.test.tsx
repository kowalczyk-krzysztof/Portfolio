import { createTestStore } from '../../app/store';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  SET_LOCALE,
  Localization,
} from '../../features/localization/localizationSlice';
import {
  locale_ENG,
  LocaleNames,
  locale_JP,
} from '../../features/localization/locales';
import { MenuDisplay } from './Navbar';
import { LinksDropdown } from './LinksDropdown';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing link list', () => {
  test('testing link list rendering at < 768 width with display === MenuDisplay.NONE', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LinksDropdown display={MenuDisplay.NONE} setDisplay={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('linklist')).toHaveStyle('display: none');
  });
  test('testing link list rendering at < 768 width with display === MenuDisplay.BLOCK', () => {
    // This is done because window.innerWidth property is readonly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LinksDropdown display={MenuDisplay.BLOCK} setDisplay={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('linklist')).toHaveStyle('display: block');
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
          <LinksDropdown display={MenuDisplay.BLOCK} setDisplay={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    const home: HTMLElement | null = screen.queryByTestId('homelink');
    expect(home).toBeInTheDocument();
    expect(state.locale).toEqual(locale_ENG);
    expect(home).toHaveTextContent('Home');
    expect(window.innerWidth).toEqual(767);
    expect(queryByTestId('linklist')).toHaveStyle('display: block');
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization;
    expect(state.locale).toEqual(locale_JP);
    expect(home).toHaveTextContent('ホーム');
  });
});
