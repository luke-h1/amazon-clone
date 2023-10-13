/* eslint-disable import/no-cycle */
import { Cart } from '@frontend/types/cart';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface CartState {
  items: Cart[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      // eslint-disable-next-line no-param-reassign
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const newBasket = [...state.items];

      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (index !== -1) {
        newBasket.splice(index, 1);
        // eslint-disable-next-line no-param-reassign
        state.items = newBasket;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

export const selectCartTotal = (state: RootState) => {
  const totalAmount = state.cart.items.reduce(
    // eslint-disable-next-line no-return-assign, no-param-reassign
    (total, item) => (total += item.price),
    0,
  );
  return totalAmount;
};

export default cartSlice.reducer;
