import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import 'src/index.css';
import 'src/assets/fonts/Roboto-Bold.ttf';
import 'src/assets/fonts/Roboto-Medium.ttf';
import 'src/assets/fonts/Roboto-Regular.ttf';

import App from 'components/App';
import Loader from 'components/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
