import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

// Configure the Redux store with the contactReducer as the root reducer
const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

// Define the types for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
