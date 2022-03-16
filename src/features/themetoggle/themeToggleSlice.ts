import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { lightTheme, darkTheme, ThemeNames } from '../../createGlobalStyle';

export type ThemeProps = {
  readonly name: ThemeNames;
  readonly background: string;
  readonly color: string;
};

type ThemeToggleProps = {
  readonly theme: ThemeProps;
};

export const initialState: ThemeToggleProps = {
  theme: lightTheme,
};

const themeToggleSlice = createSlice({
  name: `themeToggle`,
  initialState,
  reducers: {
    SET_THEME(state, action: PayloadAction<ThemeNames>) {
      state.theme = action.payload === ThemeNames.DARK ? darkTheme : lightTheme;
    },
  },
});

export const themeSelector = (state: RootState) => state.themeToggle.theme;

export const { SET_THEME } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
