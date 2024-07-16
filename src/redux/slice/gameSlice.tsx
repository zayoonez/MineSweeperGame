import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { createBoard } from "../../utils/createBoard";
import { CellState } from "../../constants/types";
import { GameStatus } from "../../constants/types";
import { countNeighborMines } from "../../utils/countNeighborMines";
import { openEmptyCells } from "../../utils/openEmptyCells";

interface GameState {
  rows: number;
  cols: number;
  mines: number;
  board: CellState[][];
  gameStatus: GameStatus;
}

const initialState: GameState = {
  rows: 8,
  cols: 8,
  mines: 10,
  board: createBoard(8, 8),
  gameStatus: "Ready",
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
    },
    startGame: (state, action) => {
      state.board = action.payload;
      state.gameStatus = "Playing";
    },
    openCell: (state, action) => {
      const { x, y } = action.payload;
      const cell = state.board[y][x];
      if (cell.isFlagged) {
        return;
      }
      if (!cell.isOpened) {
        // cell.isOpened = true;
        if (cell.hasMine) {
          state.gameStatus = "Lose";
          cell.isOpened = true;
          console.log("짐");
        } else {
          cell.neighborBombs = countNeighborMines(state.board, y, x);
          console.log(cell.neighborBombs, "개 있다");
          if (cell.neighborBombs === 0) {
            openEmptyCells(state.board, y, x);
            cell.isOpened = true;
          } else {
            cell.isOpened = true;
          }
        }
      }
    },
    flagCell: (state, action) => {
      const { x, y } = action.payload;
      const cell = state.board[y][x];
      // flag 상태 변경
      if (!cell.isOpened) {
        cell.isFlagged = !cell.isFlagged;
      }
    },
  },
});

export const {
  setDifficulty,
  setCustomDifficulty,
  startGame,
  openCell,
  flagCell,
} = gameSlice.actions;

export default gameSlice.reducer;
