import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localizationReducer from '../features/localization/localizationSlice';
import themeToggleReducer from '../features/themetoggle/themeToggleSlice';

export const store = configureStore({
  reducer: {
    localization: localizationReducer,
    themeToggle: themeToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
