import { createSlice } from "@reduxjs/toolkit";

const todoSlice2 = createSlice({
  name: "todo2",
  initialState: {
    aFaire: [],
    enCours: [],
    fait: [],
  },
  reducers: {
    addAFaire: (state, action) => {
      const newTask = { id: Date.now(), name: action.payload };
      state.aFaire.push(newTask);
    },
    moveToEnCours: (state, action) => {
      const id = action.payload;
      const item = state.aFaire.find((item) => item.id === id);
      if (item) {
        state.aFaire = state.aFaire.filter((task) => task.id !== id);
        state.enCours.push(item);
      }
    },
    moveToFait: (state, action) => {
      const id = action.payload;
      const item = state.enCours.find((item) => item.id === id);
      if (item) {
        state.enCours = state.enCours.filter((task) => task.id !== id);
        state.fait.push(item);
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
  todoSlice2.actions;
export default todoSlice2.reducer;
