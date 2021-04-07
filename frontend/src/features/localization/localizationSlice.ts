import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  Locale,
  locale_EN,
  locale_PL,
  LocaleNames,
  locale_JP,
} from './locales';
// Interface for locale properties

interface Localization {
  locale: Locale;
}

const initialState: Localization = {
  locale: locale_EN,
};
// Slice
const localizationSlice = createSlice({
  name: `localization`,
  initialState,
  reducers: {
    SET_LOCALE(state, action: PayloadAction<LocaleNames>) {
      if (action.payload === LocaleNames.ENG) state.locale = locale_EN;
      if (action.payload === LocaleNames.PL) state.locale = locale_PL;
      if (action.payload === LocaleNames.JP) state.locale = locale_JP;
    },
  },
});
// Selectors
export const localizationSelector = (state: RootState) =>
  state.localization.locale;
// Actions and reducer
export const { SET_LOCALE } = localizationSlice.actions;
export default localizationSlice.reducer;
