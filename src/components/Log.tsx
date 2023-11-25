import { LogProps } from '../types';

function Log({ gameTurns }: LogProps) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={index}>
          {`Player: ${turn.player} Row: ${turn.square.row + 1} Col:${
            turn.square.col + 1
          }`}
        </li>
      ))}
    </ol>
  );
}

export default Log;
