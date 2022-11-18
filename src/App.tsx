import React, { useState } from 'react'

export function App() {
  const alphabet = []
  const [word, setWord] = useState('MOUSE')
  const [letters, setLetters] = useState(['U', 'M'])

  const wordArray = Array.from(word)

  return (
    <div>
      <main>
        <h1>Do you want to build a snowman?</h1>
        <img src="/snowman/step_7.png" height="300px"></img>
        <ul>
          {wordArray.map((char, i) => {
            return <li key={i}>{letters.includes(char) ? char : '_'}</li>
          })}
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
