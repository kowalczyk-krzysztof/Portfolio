import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// Themes
import { lightTheme, darkTheme, ThemeNames } from '../../createGlobalStyle';

// Interface defining what props does a theme have
export interface ThemeProps {
  name: ThemeNames;
  body: string;
  text: string;
  navbarBg: string;
  navbarLinkHover: string;
}

interface ThemeToggleProps {
  theme: ThemeProps;
}

const initialState: ThemeToggleProps = {
  theme: lightTheme,
};

// Slice
const themeToggleSlice = createSlice({
  name: `themeToggle`,
  initialState,
  reducers: {
    SET_THEME_DARK(state) {
      state.theme = darkTheme;
    },
    SET_THEME_LIGHT(state) {
      state.theme = lightTheme;
    },
  },
});

// Selectors
export const themeSelector = (state: RootState) => state.themeToggle.theme;
// Actions and reducer
export const { SET_THEME_DARK, SET_THEME_LIGHT } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
