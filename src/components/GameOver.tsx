import { GameOverProps } from '../types';

function GameOver({ winner, onRematch }: GameOverProps) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>
        {winner} {winner === '' ? 'DRAW' : 'WON'}
      </p>
      <p>
        <button onClick={onRematch}>Rematch</button>
      </p>
    </div>
  );
}

export default GameOver;
