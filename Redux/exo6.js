import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

store.dispatch(
  cartSlice.actions.addToCart({
    id: 1,
    name: "Meta Quest 3s",
    price: 299,
  }),
);

const cartStore = store.getState();

console.log(cartStore.cart);
