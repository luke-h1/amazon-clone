/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
