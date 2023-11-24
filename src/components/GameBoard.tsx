import { useState } from 'react';
import { GameBoardProps } from '../types';
// import { initialGameBoardType } from '../types';

const initialGameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function GameBoard({ activePlayerSymbol, onSelectSquare }: GameBoardProps) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    console.log(activePlayerSymbol);
    setGameBoard(prevGameBoard => {
      const updatedBoard = [
        ...prevGameBoard.map(innerArray => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
