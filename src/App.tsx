import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { GameTurnTypes } from './types';

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnTypes[]>([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setActivePlayer(prevActivePlayer => {
      return prevActivePlayer === 'X' ? 'O' : 'X';
    });
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { player: currentPlayer, square: { row: rowIndex, col: colIndex } },
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
            symbol="O"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log />
    </main>
  );
}

export default App;
