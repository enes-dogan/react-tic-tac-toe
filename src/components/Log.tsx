import { LogProps } from '../types';
import { playersType } from '../types';

function Log({ turns, players }: LogProps) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player as keyof playersType].toUpperCase()} selected.
          Row: {turn.square.row + 1} Col:
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

export default Log;
