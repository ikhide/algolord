import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Square = ({ playerMark, squareId, handleSquareClick }) => {
  return (
    <div className="square" onClick={() => handleSquareClick(squareId)}>
      {playerMark}
    </div>
  );
};

const Board = ({
  board,
  isXnext,
  winner,
  gameOver,
  handleSquareClick,
  handleReset,
}) => (
  <div className="container">
    {gameOver && !winner
      ? "Game Over"
      : winner
      ? "Winner: " + winner
      : "Next Player: " + (isXnext ? "X" : "O")}
    <button className="button" onClick={handleReset}>
      {" "}
      Reset{" "}
    </button>
    <div className="board">
      {board.map((playerMark, idx) => (
        <Square
          key={idx}
          squareId={idx}
          playerMark={playerMark}
          handleSquareClick={handleSquareClick}
        />
      ))}
    </div>
  </div>
);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  let initialState = {
    board: Array(9).fill(null),
    isXnext: true,
    gameOver: false,
  };
  const [board, setBoard] = useState(initialState.board);
  const [isXnext, setIsXNext] = useState(initialState.isXnext);
  const [isGameOver, setGameOver] = useState(initialState.board.gameOver);
  let winner = false;
  const isWinner = winningCombinations.some((combo) => {
    const [id1, id2, id3] = combo;
    const marks = [board[id1], board[id2], board[id3]];
    const [firstMark] = marks;
    const isWinningCombo =
      firstMark && marks.every((mark) => mark === firstMark);
    if (isWinningCombo) {
      winner = firstMark;
      return true;
    }
    return null;
  });

  let squareClicked = (i) => {
    const tempBoard = [...board];
    if (winner || tempBoard[i]) return;
    tempBoard[i] = isXnext ? "X" : "O";
    setGameOver(isWinner || tempBoard.every((mark) => !!mark));
    setBoard(tempBoard);
    setIsXNext(!isXnext);
  };

  let resetGame = () => {
    //set initial state
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          board={board}
          isXnext={isXnext}
          winner={winner}
          gameOver={isGameOver}
          handleSquareClick={squareClicked}
          handleReset={resetGame}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));
