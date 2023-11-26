export type squareType = '' | 'X' | 'O';
export type rowType = [squareType, squareType, squareType];
export type GameBoardType = [rowType, rowType, rowType];

interface WinningCombination {
  row: number;
  column: number;
}

export interface WinningCombinations {
  [index: number]: WinningCombination;
}

export interface GameTurnTypes {
  player: string;
  square: {
    row: number;
    col: number;
  };
}

export interface playersType {
  X: string;
  O: string;
}

export interface PlayerProps {
  initialName: string;
  symbol: 'X' | 'O';
  isActive: boolean;
  onStopEditing: (symbol: 'X' | 'O', playerName: string) => void;
}

export interface GameBoardProps {
  gameBoard: GameBoardType;
  onSelectSquare: (row: number, col: number) => void;
}

export interface LogProps {
  turns: GameTurnTypes[];
}

export interface GameOverProps {
  winner: string | undefined;
  onRematch: () => void;
}
