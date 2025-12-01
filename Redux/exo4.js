import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "Sammy", email: "" },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

store.dispatch(userSlice.actions.setEmail("user@gmail.com"));

console.log(store.getState());
