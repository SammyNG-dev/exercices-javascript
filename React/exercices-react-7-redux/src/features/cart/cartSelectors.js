import { createSelector } from "@reduxjs/toolkit";

const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart.items,
);

export const selectCartTotal = createSelector([selectCartItems], (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  (items) => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  },
);
