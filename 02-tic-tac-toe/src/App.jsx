import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS, WINNER_COMBINATIONS } from "./constants"
import { chechWinner } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // Nul is no winner, false is a draw

  const chechEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // If the square is already filled, return
    if (board[index] || winner ) return

    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Update the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Check if there is a winner
    const newWinner = chechWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (chechEndGame(newBoard)) {
      setWinner(false) // Draw
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={ resetGame }>Reset Game</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={ index }
                index={ index }
                updateBoard={ updateBoard }
              >
                { square }
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={ turn === TURNS.X }> 
          {TURNS.X}
        </Square>
        <Square isSelected={ turn === TURNS.O }> 
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={ resetGame } winner={ winner } />
    </main>
  ) 
}

export default App
