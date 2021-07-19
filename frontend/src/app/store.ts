import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import localizationReducer from '../features/localization/localizationSlice';
import themeToggleReducer from '../features/themetoggle/themeToggleSlice';
/*
 * redux-persist is a tool that allow persisting the redux store between page refreshes etc. To make it work, define persistConfig and persistedReducer and pass persistConfig and rootReducer to persistedReducer then use it as default reducer. To stop getting serialization errors, you need to ignore persist action in middleware
 * 
 * middleware: getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST'] },

 * After setting up store, you need to wrap your <App> (or only the components you want) component with <PersistGate loading={null} persistor={persistor}> which itself is wrapped by <Provider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          // App components here
        </BrowserRouter>
      </PersistGate>
    </Provider>
    
 */

// Define rootReducer using combineReducers. Place all reducers inside as name: reducerName
const rootReducer = combineReducers({
  localization: localizationReducer,
  themeToggle: themeToggleReducer,
});

// // Redux persist config
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// // Redux persist reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST'] },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
