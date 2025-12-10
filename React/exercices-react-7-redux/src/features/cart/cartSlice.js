import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (!item) {
        state.items.push({ id: Date.now(), name: name, price: price });
        state.total += price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const article = state.items.find((item) => item.id === id);
      if (!article) return;
      state.items = state.items.filter((item) => item.id !== id);
      state.total -= article.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
