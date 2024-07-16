import styled from "styled-components";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

interface DisplayProps {
  timeValue: number;
}
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
const DisplayBoard = ({ timeValue }: DisplayProps) => {
  const mineNum = useSelector((state: RootState) => state.game.mines);

  return (
    <Container>
      <MineNumDisplay>{mineNum.toString().padStart(3, "0")}</MineNumDisplay>
      <MainButton>😃</MainButton>
      <Timer>{timeValue.toString().padStart(3, "0")}</Timer>
    </Container>
  );
};

export default DisplayBoard;
