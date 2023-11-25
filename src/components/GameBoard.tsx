import { GameBoardProps } from '../types';
import { rowType } from '../types';

function GameBoard({ gameBoard, onSelectSquare }: GameBoardProps) {
  return (
    <ol id="game-board">
      {gameBoard.map((row: rowType, rowIndex: number) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol.length > 0 ? true : false}
                >
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
