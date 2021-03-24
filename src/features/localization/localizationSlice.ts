import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Put all texts in here

interface Localization {
  locale: Locale;
}

export enum Locales {
  ENG = 'ENG',
  PL = 'PL',
}

interface Locale {
  name: Locales;
  navbarItem1: string;
  aboutMeH1: string;
}

const locale_EN: Locale = {
  name: Locales.ENG,
  navbarItem1: 'About me',

  aboutMeH1: 'My personal project',
};
const locale_PL: Locale = {
  name: Locales.PL,
  navbarItem1: 'O mnie',
  aboutMeH1: 'Mój personalny projekt',
};

const initialState: Localization = {
  locale: locale_EN,
};

// Slice
const localizationSlice = createSlice({
  name: `localization`,
  initialState,
  reducers: {
    SET_LOCALE(state, action: PayloadAction<Locales>) {
      if (action.payload === Locales.ENG) state.locale = locale_EN;
      if (action.payload === Locales.PL) state.locale = locale_PL;
    },
  },
});

// Selectors
export const localizationSelector = (state: RootState) =>
  state.localization.locale;
// Actions and reducer
export const { SET_LOCALE } = localizationSlice.actions;
export default localizationSlice.reducer;
