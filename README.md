# Minsweeper 지뢰찾기 게임

## 설치 및 실행

### 의존성 패키지 설치

`npm install`

### **실행**

`npm start`

## 디렉토리 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Modal
 ┃ ┃ ┗ 📜CustomModal.tsx
 ┃ ┣ 📜Cell.tsx
 ┃ ┣ 📜DisplayBoard.tsx
 ┃ ┣ 📜GameBoard.tsx
 ┃ ┗ 📜Menu.tsx
 ┣ 📂constants           // 공통 상수 폴더
 ┃ ┗ 📜types.tsx
 ┣ 📂redux
 ┃ ┣ 📂slice              // game과 관련된 reducers
 ┃ ┃ ┗ 📜gameSlice.tsx
 ┃ ┗ 📜store.tsx
 ┣ 📂utils.                  // 로직 처리 함수들
 ┃ ┣ 📜countNeighborMines.tsx
 ┃ ┣ 📜createBoard.tsx
 ┃ ┣ 📜openEmptyCells.tsx
 ┃ ┗ 📜randomizeMines.tsx
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
```

## 구현 내용

- [x] 처음 셀 클릭 시 지뢰가 터지지 않고, 게임 시작
- [x] 게임 난이도 변경 ( Beginner, Intermediate, Expert, Custom )
  - custom 으로 난이도 조정 시, Modal 창이 뜨며 가로, 세로, 지뢰수가 각각 최대 100, 100, 총 격자칸 수의 1/3 이하인지 입력 검증
- [x] 난이도가 변경될 때마다 찾아내야하는 지뢰 개수 좌측 display 보드에 표시
- [x] 오른쪽 클릭시 깃발 표시 기능
- [x] 새로고침 혹은 new 버튼 클릭 시 기존 난이도의 게임 재시작 (Slice - localstorage 저장)
- [x] 타이머 기능
  - 게임 시작 시 타이머 시작
  - 999초가 넘어가면 게임 초기화
## 구현 UI
![image1](https://github.com/user-attachments/assets/a2b059d8-9085-4752-ae4d-67b51c70430e)
### 구현 영상
https://github.com/user-attachments/assets/46137f42-e2ee-4112-8f88-0a84f9e26bb9
