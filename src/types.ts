interface WinningCombination {
  row: number;
  column: number;
}
export interface WinningCombinations {
  [index: number]: WinningCombination;
}
