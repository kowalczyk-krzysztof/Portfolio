import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localizationReducer from '../features/localization/localizationSlice';

export const store = configureStore({
  reducer: {
    localization: localizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
