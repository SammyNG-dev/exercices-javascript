import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: { score: 0 },
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    addBonus: (state) => {
      state.score += 10;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore, addBonus, reset } = scoreSlice.actions;
export default scoreSlice.reducer;
