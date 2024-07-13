import styled from "styled-components";

interface DisplayProps {
  mineNumValue: number;
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
const DisplayBoard = ({ mineNumValue, timeValue }: DisplayProps) => {
  return (
    <Container>
      <MineNumDisplay>
        {mineNumValue.toString().padStart(3, "0")}
      </MineNumDisplay>
      <MainButton>😃</MainButton>
      <Timer>{timeValue.toString().padStart(3, "0")}</Timer>
    </Container>
  );
};

export default DisplayBoard;
