import React, { useState } from 'react'

export function App() {
  const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphabetArray = alphabetString.split('')
  console.log(alphabetArray)
  const listAlphabet = alphabetArray.map((letter) => (
    <button key={letter}>{letter}</button>
  ))

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
        <div className="letters">{listAlphabet}</div>
      </main>
    </div>
  )
}
