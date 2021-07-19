import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// Themes
import { lightTheme, darkTheme, ThemeNames } from '../../createGlobalStyle';
// Interface defining what props does a theme have

export interface ThemeProps {
  name: ThemeNames;
  background: string;
  color: string;
}

interface ThemeToggleProps {
  theme: ThemeProps;
}

export const initialState: ThemeToggleProps = {
  theme: lightTheme,
};
// Slice
const themeToggleSlice = createSlice({
  name: `themeToggle`,
  initialState,
  reducers: {
    SET_THEME(state, action: PayloadAction<ThemeNames>) {
      if (action.payload === ThemeNames.DARK) state.theme = darkTheme;
      if (action.payload === ThemeNames.LIGHT) state.theme = lightTheme;
    },
  },
});
// Selectors
export const themeSelector = (state: RootState) => state.themeToggle.theme;
// Actions and reducer
export const { SET_THEME } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
