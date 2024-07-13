import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCustomDifficulty } from "../../redux/slice/gameSlice";

export interface ModalProps {
  setIsModalOpen: any;
}

const ModalOuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalInnerWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 80vw;
  max-width: 400px;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  background: none;
  position: relative;
  bottom: 35px;
  left: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const Label = styled.div`
  width: 150px;
  margin-bottom: 3px;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 25px;
  width: 150px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100px;
`;

function Modal({ setIsModalOpen }: ModalProps) {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [mineNumber, setMineNumber] = useState("");
  const dispatch = useDispatch();

  // 모달창 외부 클릭 시 닫기 위한 ref
  const clickedRef = useRef<EventTarget>();

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    clickedRef.current = e.target;
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLElement>) => {
    clickedRef.current = e.target;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      setCustomDifficulty({
        rows: parseInt(height),
        cols: parseInt(width),
        mines: parseInt(mineNumber),
      })
    );
    setIsModalOpen(false);
    // 세팅한 값으로 게임 시작
  };

  function handleClickClose(e: React.MouseEvent<HTMLElement>) {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    e.stopPropagation();
    setIsModalOpen(false);
  }
  // 동적으로 최대 지뢰수 계산
  const maxMineNum = Math.floor((parseInt(width) * parseInt(height)) / 3);

  return (
    // 모달 외부
    <ModalOuterWrapper onMouseUp={(e) => handleClickClose(e)}>
      {/* 모달 내부 */}
      <ModalInnerWrapper
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
      >
        <Header>
          <Title>Custom Your GameBoard !</Title>

          <CloseButton type="button" onClick={(e) => handleClickClose(e)}>
            X 닫기
          </CloseButton>
        </Header>

        <Form onSubmit={handleSubmit}>
          <label>
            <Label>Height :</Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              placeholder="최대 100"
              max={100}
            />
          </label>
          <label>
            <Label>Width :</Label>
            <Input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
              placeholder="최대 100"
              max={100}
            />
          </label>
          <label>
            <Label>Mine Number:</Label>
            <Input
              type="number"
              value={mineNumber}
              onChange={(e) => setMineNumber(e.target.value)}
              required
              placeholder="총 셀 수의 1/3 이하"
              max={maxMineNum}
            />
          </label>
          <SubmitButton type="submit">OK</SubmitButton>
        </Form>
      </ModalInnerWrapper>
    </ModalOuterWrapper>
  );
}

export default Modal;
