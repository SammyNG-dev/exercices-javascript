import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (!item) {
        state.items.push({
          id: Date.now(),
          name: name,
          price: price,
          quantity: 1,
        });
        state.total += price;
      } else {
        item.quantity += 1;
        state.total += price;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
      state.items = state.items.filter((item) => item.id !== id);
      state.total -= item.price * item.quantity;
    },

    incrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      }
    },

    decrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity > 0) {
          state.total -= item.price;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
          state.total -= item.price;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
