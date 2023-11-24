import { useState } from 'react';
import { PlayerProps } from '../types';

function Player({ name, symbol }: PlayerProps) {
  const [enteredName, setEnteredName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredName(event.target.value);
  }

  function handleNameChangeClick() {
    setIsEditing(prevState => !prevState);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input value={enteredName} onChange={handleNameChange} />
        ) : (
          <span className="player-name">{enteredName}</span>
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
