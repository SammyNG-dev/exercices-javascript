import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

console.log(store.getState());

store.dispatch(todoSlice.actions.addTodo("faire les courses"));

console.log(store.getState());

store.dispatch(todoSlice.actions.addTodo("manger un kebab"));

console.log(store.getState());