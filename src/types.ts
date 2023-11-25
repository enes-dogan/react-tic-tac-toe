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

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}

export interface GameBoardProps {
  turns: GameTurnTypes[];
  onSelectSquare: (row: number, col: number) => void;
}

export interface LogProps {
  gameTurns: GameTurnTypes[];
}
