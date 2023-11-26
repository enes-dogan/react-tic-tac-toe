import { useState } from 'react';

import { GameTurnTypes } from './types';
import { GameBoardType } from './types';
import { squareType } from './types';
import { playersType } from './types';

import { WINNING_COMBINATIONS } from './winning-combinations';
import { INITIAL_GAME_BOARD } from './winning-combinations';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

const INITIAL_PLAYERS: playersType = {
  X: 'Player 1',
  O: 'Player 2',
};

function deriveActivePlayer(gameTurns: GameTurnTypes[]) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard: GameBoardType) {
  let winner = '';

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break;
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns: GameTurnTypes[]) {
  const gameBoard = [
    ...INITIAL_GAME_BOARD.map(array => [...array]),
  ] as GameBoardType;

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player as squareType;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState<playersType>(INITIAL_PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurnTypes[]>([]);

  function handlePlayerNameEdit(symbol: 'X' | 'O', playerName: string) {
    setPlayers(prevPlayers => {
      return { ...prevPlayers, [symbol]: playerName };
    });
  }

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleResetGame() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={INITIAL_PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onStopEditing={handlePlayerNameEdit}
          />
          <Player
            initialName={INITIAL_PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onStopEditing={handlePlayerNameEdit}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={players[winner as keyof playersType]}
            onRematch={handleResetGame}
          />
        )}
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}

export default App;
