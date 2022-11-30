import React, { useEffect, useState } from 'react'
import wordList from '../wordList.json'

let randomWord = wordList[Math.floor(Math.random() * wordList.length)]

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export function App() {
  console.log(randomWord)

  const [word, setWord] = useState(randomWord)
  const [guesses, setGuesses] = useState<string[]>([])

  const wordArray = Array.from(word)

  async function handleLetterClick(letter: string) {
    setGuesses([...guesses, letter])
  }

  function handleNewGame() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    setWord(randomWord)
    setGuesses([])
  }

  //word = [s,n,o,w,m,a,n]
  // guesses = [o,n,p]
  // word.filter(l => guesses.includes(l)) <= [n,o,n]
  //  [n,o,n].length

  let snowmanImage = wordArray.filter((letter) =>
    guesses.includes(letter)
  ).length

  return (
    <div>
      <main>
        <h1>Do you want to build a snowman?</h1>
        <p></p>
        <img src={`/snowman/step_${snowmanImage}.png`} height="300px" />
        <ul>
          {wordArray.map((char, i) => {
            return <li key={i}>{guesses.includes(char) ? char : '_'}</li>
          })}
        </ul>
        <div className="letters">
          {alphabet.map((letter, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(letter)}
              disabled={guesses.includes(letter)}
              className={guesses.includes(letter) ? 'clicked' : undefined}
            >
              {letter}
            </button>
          ))}
        </div>
        <p></p>
        <div>
          <button disabled={snowmanImage !== 7} onClick={() => handleNewGame()}>
            Play again?
          </button>
        </div>
      </main>
    </div>
  )
}
