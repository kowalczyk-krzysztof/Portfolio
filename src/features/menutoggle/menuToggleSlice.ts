import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface MenuToggle {
  menu: string;
}
const initialState: MenuToggle = {
  menu: 'none',
};

// Slice
const menuToggleSlice = createSlice({
  name: `menuToggle`,
  initialState,
  reducers: {
    SET_MENU_DISPLAY_NONE(state) {
      state.menu = 'none';
    },
    SET_MENU_DISPLAY_BLOCK(state) {
      state.menu = 'block';
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
