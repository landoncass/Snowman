import React, { useEffect, useState } from 'react'
import wordList from '../wordList.json'

export function App() {
  const randomWord =
    wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
  console.log(randomWord.toUpperCase())
  const alphabetArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  const [word, setWord] = useState(randomWord)
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
  console.log(word)

  const wordArray = Array.from(word)

  async function handleLetterClick(alphabet: string) {
    if (wordArray.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet])
      console.log(correctGuesses)
    }
  }

  return (
    <div>
      <main>
        <h1>Do you want to build a snowman?</h1>
        <img src="/snowman/step_7.png" height="300px"></img>
        <ul>
          {wordArray.map((char, i) => {
            return <li key={i}>{correctGuesses.includes(char) ? char : '_'}</li>
          })}
        </ul>
        <div className="letters">
          {alphabetArray.map((alphabet, index) => (
            <button key={index} onClick={() => handleLetterClick(alphabet)}>
              {alphabet}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
