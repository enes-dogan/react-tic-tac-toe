import { LogProps } from '../types';

function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} selected. Row: {turn.square.row + 1} Col:
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

export default Log;
