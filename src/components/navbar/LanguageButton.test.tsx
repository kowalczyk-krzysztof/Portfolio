import userEvent from '@testing-library/user-event';
import { createTestStore } from '../../app/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LanguageButton } from './LanguageButton';
import { FlagNames, AriaLables } from './LanguageToggle';
import {
  locale_ENG,
  locale_PL,
  LocaleNames,
  locale_JP,
} from '../../features/localization/locales';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing language toggle buttons', () => {
  test('language toggle button JP onClick changing language to JP', () => {
    jest.useFakeTimers();
    const { queryByTestId } = render(
      <Provider store={store}>
        <LanguageButton
          aria={AriaLables.JP}
          flagName={FlagNames.JP}
          localeName={LocaleNames.JP}
        />
      </Provider>
    );
    expect(queryByTestId('languagetogglebutton')).toBeInTheDocument();
    let state = store.getState().localization.locale;
    expect(state).toEqual(locale_ENG);
    userEvent.click(queryByTestId('languagetogglebutton') as HTMLElement);
    jest.advanceTimersByTime(101);
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_JP);
  });
  test('language toggle button PL onClick changing language to PL', () => {
    jest.useFakeTimers();
    const { queryByTestId } = render(
      <Provider store={store}>
        <LanguageButton
          aria={AriaLables.PL}
          flagName={FlagNames.PL}
          localeName={LocaleNames.PL}
        />
      </Provider>
    );
    expect(queryByTestId('languagetogglebutton')).toBeInTheDocument();
    let state = store.getState().localization.locale;
    expect(state).toEqual(locale_ENG);
    userEvent.click(queryByTestId('languagetogglebutton') as HTMLElement);
    jest.advanceTimersByTime(101);
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_PL);
  });
  test('language toggle button ENG onClick changing language to ENG', () => {
    jest.useFakeTimers();
    const { queryByTestId } = render(
      <Provider store={store}>
        <LanguageButton
          aria={AriaLables.ENG}
          flagName={FlagNames.ENG}
          localeName={LocaleNames.ENG}
        />
      </Provider>
    );
    expect(queryByTestId('languagetogglebutton')).toBeInTheDocument();
    let state = store.getState().localization.locale;
    expect(state).toEqual(locale_ENG);
    userEvent.click(queryByTestId('languagetogglebutton') as HTMLElement);
    jest.advanceTimersByTime(101);
    state = store.getState().localization.locale;
    expect(state).toEqual(locale_ENG);
  });
});
