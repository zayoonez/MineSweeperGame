import { configureStore } from "@reduxjs/toolkit";
// import typeSlice from "./slice/typeSlice";
// import questionsSlice from "./slice/questionsSlice";

const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
