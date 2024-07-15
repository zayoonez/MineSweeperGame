import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { createBoard } from "../../utils/createBoard";
import { CellState } from "../../constants/types";

interface GameState {
  rows: number;
  cols: number;
  mines: number;
  board: CellState[][];
}

const initialState: GameState = {
  rows: 8,
  cols: 8,
  mines: 10,
  board: createBoard(8, 8),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      switch (action.payload) {
        case "Beginner":
          state.rows = 8;
          state.cols = 8;
          state.mines = 10;
          state.board = createBoard(state.rows, state.cols);

          break;
        case "Intermediate":
          state.rows = 16;
          state.cols = 16;
          state.mines = 40;
          state.board = createBoard(state.rows, state.cols);

          break;
        case "Expert":
          state.rows = 16;
          state.cols = 32;
          state.mines = 100;
          state.board = createBoard(state.rows, state.cols);
          break;
        default:
          break;
      }
    },
    setCustomDifficulty: (state, action) => {
      state.rows = action.payload.rows;
      state.cols = action.payload.cols;
      state.mines = action.payload.mines;
      state.board = createBoard(state.rows, state.cols);

      console.log(state.rows);
    },
    setBoard: (state, action) => {
      state.board = createBoard(state.rows, state.cols);
    },
    // updateBoard: (state, action) => {
    //   state.board = action.payload;
    // },
  },
});

export const { setDifficulty, setCustomDifficulty, setBoard } =
  gameSlice.actions;

export default gameSlice.reducer;
