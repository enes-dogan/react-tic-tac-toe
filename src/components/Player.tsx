import { useState } from 'react';
import { PlayerProps } from '../types';

function Player({ initialName, symbol }: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  function handleNameChangeClick() {
    setIsEditing(editing => !editing);
  }

  return (
    <li>
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
