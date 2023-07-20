import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../contactsSlice/conactsSlice';

const createPersistConfig = (key, fieldsToIgnore = []) => ({
  key,
  storage,
  serialize: state =>
    JSON.stringify(state, (key, value) =>
      fieldsToIgnore.includes(key) ? undefined : value
    ),
  deserialize: state =>
    JSON.parse(state, (key, value) =>
      fieldsToIgnore.includes(key) ? undefined : value
    ),
});

const persistConfig = createPersistConfig('root', [
  'register',
  'result',
  'filter',
]);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
