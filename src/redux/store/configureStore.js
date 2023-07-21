import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../contactsSlice/conactsSlice';

export const store = configureStore({
  reducer: rootReducer,
});
