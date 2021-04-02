import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum MenuDisplay {
  NONE = 'none',
  BLOCK = 'block',
}

interface MenuToggle {
  menu: MenuDisplay;
}
const initialState: MenuToggle = {
  menu: MenuDisplay.NONE,
};
// Slice
const menuToggleSlice = createSlice({
  name: `menuToggle`,
  initialState,
  reducers: {
    SET_MENU_DISPLAY_NONE(state) {
      state.menu = MenuDisplay.NONE;
    },
    SET_MENU_DISPLAY_BLOCK(state) {
      state.menu = MenuDisplay.BLOCK;
    },
  },
});
// Selectors
export const menuToggleSelector = (state: RootState) => state.menuToggle.menu;
// Actions and reducer
export const {
  SET_MENU_DISPLAY_NONE,
  SET_MENU_DISPLAY_BLOCK,
} = menuToggleSlice.actions;
export default menuToggleSlice.reducer;
