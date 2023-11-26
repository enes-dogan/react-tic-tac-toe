import { useState } from 'react';
import { PlayerProps } from '../types';

function Player({ initialName, symbol, isActive, onStopEditing }: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  function handleNameChangeClick() {
    setIsEditing(editing => !editing);
    onStopEditing(symbol, playerName);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleNameChangeClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </li>
  );
}

export default Player;
