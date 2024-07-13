import styled from "styled-components";
import { useState } from "react";

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

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  //   const handleMouseLeave = () => {
  //     setIsOpen(false);
  //   };
  return (
    <MenuContainer>
      <MenuButton onClick={handleClickMenu}>Game</MenuButton>
      <MenuContent isOpen={isOpen}>
        <div>New Game</div>
        <div>Beginner</div>
        <div>Intermediate</div>
        <div>Expert</div>
        <div>Custom</div>
      </MenuContent>

      <ExitButton>exit</ExitButton>
    </MenuContainer>
  );
}
export default Menu;
