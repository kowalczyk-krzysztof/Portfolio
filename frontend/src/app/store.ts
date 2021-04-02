import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localizationReducer from '../features/localization/localizationSlice';
import themeToggleReducer from '../features/themetoggle/themeToggleSlice';
import menuToggleReducer from '../features/menutoggle/menuToggleSlice';

export const store = configureStore({
  reducer: {
    localization: localizationReducer,
    themeToggle: themeToggleReducer,
    menuToggle: menuToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
