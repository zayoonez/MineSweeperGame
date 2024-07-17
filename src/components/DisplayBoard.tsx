import styled from "styled-components";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  incrementTime,
  resetTime,
  setGameStatus,
} from "../redux/slice/gameSlice";

const Container = styled.div`
  width: 100%;
  /* background-color: black; */
  /* height: 70px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: large;
  text-align: center;
  font-size: 25px;
`;

const MineNumDisplay = styled.div`
  background-color: black;
  color: red;
  width: 60px;
`;
const MainButton = styled.div`
  background-color: white;
  cursor: pointer;
`;
const Timer = styled.div`
  background-color: black;
  color: red;
  width: 60px;
`;
const DisplayBoard = () => {
  const dispatch = useDispatch();
  const mineNum = useSelector((state: RootState) => state.game.mines);
  const time = useSelector((state: RootState) => state.game.timer);
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (gameStatus === "Playing") {
      timer = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }

    if (time > 999) {
      if (timer) {
        clearInterval(timer);
      }
      dispatch(setGameStatus("Lose"));
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [gameStatus, time, dispatch]);
  return (
    <Container>
      <MineNumDisplay>{mineNum.toString().padStart(3, "0")}</MineNumDisplay>
      <MainButton>😃</MainButton>
      <Timer>{time.toString().padStart(3, "0")}</Timer>
    </Container>
  );
};

export default DisplayBoard;
