import { createTestStore } from '../../app/store';
import { SET_LOCALE, Localization } from './localizationSlice';
import { locale_ENG, locale_PL, LocaleNames, locale_JP } from './locales';

let store = createTestStore();

beforeEach(() => {
  store = createTestStore();
});

describe('testing localization slice', () => {
  test('setting locale', () => {
    let state: Localization = store.getState().localization;
    expect(state.locale).toEqual(locale_ENG);
    store.dispatch(SET_LOCALE(LocaleNames.JP));
    state = store.getState().localization;
    expect(state.locale).toEqual(locale_JP);
    store.dispatch(SET_LOCALE(LocaleNames.PL));
    state = store.getState().localization;
    expect(state.locale).toEqual(locale_PL);
    store.dispatch(SET_LOCALE(LocaleNames.ENG));
    state = store.getState().localization;
    expect(state.locale).toEqual(locale_ENG);
  });
});
