import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  Locale,
  locale_ENG,
  locale_PL,
  LocaleNames,
  locale_JP,
} from './locales';

export type Localization = {
  readonly locale: Locale;
};

const initialState: Localization = {
  locale: locale_ENG,
};

const localizationSlice = createSlice({
  name: `localization`,
  initialState,
  reducers: {
    SET_LOCALE(state, action: PayloadAction<LocaleNames>) {
      switch (action.payload) {
        case LocaleNames.ENG:
          state.locale = locale_ENG;
          break;
        case LocaleNames.PL:
          state.locale = locale_PL;
          break;
        case LocaleNames.JP:
          state.locale = locale_JP;
          break;
        default:
          break;
      }
    },
  },
});

export const localizationSelector = (state: RootState) =>
  state.localization.locale;

export const { SET_LOCALE } = localizationSlice.actions;
export default localizationSlice.reducer;
