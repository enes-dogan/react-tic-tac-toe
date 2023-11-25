import { useState } from 'react';
import { GameTurnTypes } from './types';
import { squareType } from './types';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

// import { WINNING_COMBINATIONS } from './winning-combinations';
import { initialGameBoard } from './winning-combinations';

function deriveActivePlayer(gameTurns: GameTurnTypes[]) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnTypes[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player as squareType;
  }

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns(prevTurns => {
      const currentPlayerBasedOnPrevState = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          player: currentPlayerBasedOnPrevState,
          square: { row: rowIndex, col: colIndex },
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 2"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 1"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
