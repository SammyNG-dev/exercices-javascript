import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // => { counter: { counter: 1 } }
store.dispatch(counterSlice.actions.decrement());
console.log(store.getState()); // => { counter: { counter: 0 } }
