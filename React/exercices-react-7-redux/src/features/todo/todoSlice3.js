import { createSlice } from "@reduxjs/toolkit";

const todoSlice3 = createSlice({
  name: "todo3",
  initialState: {
    aFaire: [],
    enCours: [],
    fait: [],
  },
  reducers: {
    addAFaire: (state, action) => {
      if (typeof action.payload === "object") {
        state.aFaire.push(action.payload);
      } else {
        const newTask = { id: Date.now(), name: action.payload };
        state.aFaire.push(newTask);
      }
    },
    moveToEnCours: (state, action) => {
      if (typeof action.payload === "object") {
        state.enCours.push(action.payload);
      } else {
        const id = action.payload;
        const item = state.aFaire.find((item) => item.id === id);
        if (item) {
          state.aFaire = state.aFaire.filter((task) => task.id !== id);
          state.enCours.push(item);
        }
      }
    },
    moveToFait: (state, action) => {
      if (typeof action.payload === "object") {
        state.fait.push(action.payload);
      } else {
        const id = action.payload;
        const item = state.enCours.find((item) => item.id === id);
        if (item) {
          state.enCours = state.enCours.filter((task) => task.id !== id);
          state.fait.push(item);
        }
      }
    },
    emptyLists: (state) => {
      state.aFaire = [];
      state.enCours = [];
      state.fait = [];
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.aFaire = state.aFaire.filter((task) => task.id !== id);
    },
  },
});

export const { addAFaire, moveToEnCours, moveToFait, emptyLists, removeTask } =
  todoSlice3.actions;
export default todoSlice3.reducer;
