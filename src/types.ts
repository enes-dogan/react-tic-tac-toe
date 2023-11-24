interface WinningCombination {
  row: number;
  column: number;
}
export interface WinningCombinations {
  [index: number]: WinningCombination;
}

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}

export interface GameBoardProps {
  activePlayerSymbol: string;
  onSelectSquare: () => void;
}
