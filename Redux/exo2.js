import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter++
    },
    decrement: (state) => {
      state.counter--
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: { logged: false },
  reducers: {
    changeStatus: (state) => {
      state.logged = !state.logged;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});

console.log(store.getState());

store.dispatch(userSlice.actions.changeStatus());
store.dispatch(counterSlice.actions.increment());

