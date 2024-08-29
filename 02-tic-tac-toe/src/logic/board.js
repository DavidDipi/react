import { WINNER_COMBINATIONS } from '../constants'

export const chechWinner = (boardToCheck) => {
    for (const comb of WINNER_COMBINATIONS) {
      const [a, b, c] = comb
      if (
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // x or o
      }
      // If there is no winner, return null
    }
    return null
  }