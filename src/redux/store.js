import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from './api';
import { authReducer } from './auth/authSlice';
import dataReducer from './dataPage/dataSlice';
import stepValuerReducer from './dataPage/stepValueSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: [
    'currentHeight',
    'currentWeight',
    'desiredWeight',
    'birthday',
    'blood',
    'gender',
    'levelActivity',
  ],
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    data: persistReducer(dataPersistConfig, dataReducer),
    stepValueForm: stepValuerReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    api.middleware,
  ],
});

export const persistor = persistStore(store);
