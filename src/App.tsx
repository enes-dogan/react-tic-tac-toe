import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { GameTurnTypes } from './types';

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
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
