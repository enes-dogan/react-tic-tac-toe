interface WinningCombination {
  row: number;
  column: number;
}
export interface WinningCombinations {
  [index: number]: WinningCombination;
}

export interface initialGameBoardType {
  [rowIndex: number]: Array<string | null>;
}

export interface PlayerProps {
  initialName: string;
  symbol: string;
}
