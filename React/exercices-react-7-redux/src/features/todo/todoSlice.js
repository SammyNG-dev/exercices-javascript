import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: Date.now(), todo: action.payload, done: false };
      state.todo.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
