import React, { useState } from 'react'
import wordList from '../wordList.json'

let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

export function App() {
  console.log(randomWord)
  const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphabetArray = alphabetString.split('')

  const [word, setWord] = useState(randomWord)
  const [letters, setLetters] = useState([''])

  const wordArray = Array.from(word)

  async function handleLetterClick(letter: string) {
    console.log(`You clicked ${letter}`)
    setLetters(letter)
    console.log(letters)
  }

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
          {alphabetArray.map((letter) => {
            return (
              <button key={letter} onClick={() => handleLetterClick(letter)}>
                {letter}
              </button>
            )
          })}
          {/* {listAlphabet} */}
        </div>
      </main>
    </div>
  )
}
