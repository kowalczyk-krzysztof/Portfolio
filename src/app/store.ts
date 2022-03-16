import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';

import localizationReducer from '../features/localization/localizationSlice';
import themeToggleReducer from '../features/themetoggle/themeToggleSlice';

const rootReducer = combineReducers({
  localization: localizationReducer,
  themeToggle: themeToggleReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST'] },
  }),
});

export const createTestStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
