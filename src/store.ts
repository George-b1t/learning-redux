import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './slices/nameSlice';
import ageReducer from './slices/ageSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
    age: ageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
