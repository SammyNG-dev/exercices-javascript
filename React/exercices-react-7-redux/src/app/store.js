import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import todoReducer from "../features/todo/todoSlice";
import todoReducer2 from "../features/todo/todoSlice2";
import todoReducer3 from "../features/todo/todoSlice3";
import scoreReducer from "../features/score/scoreSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todo: todoReducer,
    todo2: todoReducer2,
    todo3: todoReducer3,
    score: scoreReducer,
    cart: cartReducer,
  },
});
