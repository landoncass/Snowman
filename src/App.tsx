import React, { useState } from 'react'

export function App() {
  const [game, setGame] = useState({
    board: ['_', 'O', '_', '_', '_', '_'],
  })

  return (
    <div>
      <main>
        <h1>Do you want to build a snowman?</h1>
        <img src="/snowman/step_7.png" height="300px"></img>
        <ul>
          <li>{game.board[0]}</li>
          <li>{game.board[1]}</li>
          <li>{game.board[2]}</li>
          <li>{game.board[3]}</li>
          <li>{game.board[4]}</li>
          <li>{game.board[5]}</li>
        </ul>
        <div className="letters">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
          <button>A</button>
        </div>
      </main>
    </div>
  )
}
