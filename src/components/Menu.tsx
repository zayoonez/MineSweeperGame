import styled from "styled-components";
import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { setDifficulty } from "../redux/slice/gameSlice";
import Modal from "./Modal/CustomModal";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  width: 80%;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  /* margin: 0px 15px; */
  height: 35px;
  position: relative;
  /* z-index: 0; */
`;

const MenuButton = styled.div`
  cursor: default;
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  /* top: -20px; */
  left: -10px;
  bottom: -175px;
  z-index: 50;
  font-weight: 400;
  background-color: #f9f9f9;

  div {
    display: block;
    text-decoration: none;
    color: rgb(37, 37, 37);
    font-size: 12px;
    padding: 10px 10px;

    &:hover {
      background-color: #ececec;
    }
  }
`;
const ExitButton = styled.div`
  /* font-size: 12px; */
`;
const DifficultyList = ["Beginner", "Intermediate", "Expert"] as const;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDifficulty = (
    difficulty: (typeof DifficultyList)[number] // "Beginner" , "Intermediate" , "Expert"
  ) => {
    dispatch(setDifficulty(difficulty));
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <MenuContainer>
      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : null}

      <MenuButton onClick={handleClickMenu}>Game</MenuButton>
      <MenuContent isOpen={isOpen}>
        <div>New Game</div>
        {DifficultyList.map((d) => (
          <div key={d} onClick={() => handleDifficulty(d)}>
            {d}
          </div>
        ))}
        <div onClick={handleModalOpen}>Custom</div>
      </MenuContent>

      <ExitButton>exit</ExitButton>
    </MenuContainer>
  );
}
export default Menu;
