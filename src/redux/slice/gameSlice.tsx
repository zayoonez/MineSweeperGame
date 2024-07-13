import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  rows: number;
  cols: number;
  mines: number;
}

const initialState: GameState = {
  rows: 8,
  cols: 8,
  mines: 10,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDifficulty: (
      state,
      action: PayloadAction<"Beginner" | "Intermediate" | "Expert">
    ) => {
      switch (action.payload) {
        case "Beginner":
          state.rows = 8;
          state.cols = 8;
          state.mines = 10;
          break;
        case "Intermediate":
          state.rows = 16;
          state.cols = 16;
          state.mines = 40;
          break;
        case "Expert":
          state.rows = 16;
          state.cols = 32;
          state.mines = 100;
          break;
        default:
          break;
      }
    },
  },
});

export const { setDifficulty } = gameSlice.actions;

export default gameSlice.reducer;
