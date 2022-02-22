import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { lightTheme, darkTheme, ThemeNames } from '../../createGlobalStyle';
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

export const themeSelector = (state: RootState) => state.themeToggle.theme;

export const { SET_THEME } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
