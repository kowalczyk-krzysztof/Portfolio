import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, Persistor } from 'redux-persist';

// redux-persist persistor
const persistor: Persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
