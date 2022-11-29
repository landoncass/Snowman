import React, { useEffect, useState } from 'react'
import wordList from '../wordList.json'

const randomWord =
  wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()

export function App() {
  console.log(randomWord.toUpperCase())

  type alphabetLetterType = {
    text: string
    clicked: boolean
  }

  useEffect(function () {
    console.log('this runs when component first runs')
    setAlphabetArray(alphabetArray)
  }, [])

  const [alphabetArray, setAlphabetArray] = useState([
    { text: 'A', clicked: false },
    { text: 'B', clicked: false },
    { text: 'C', clicked: false },
    { text: 'D', clicked: false },
    { text: 'E', clicked: false },
    { text: 'F', clicked: false },
    { text: 'G', clicked: false },
    { text: 'H', clicked: false },
    { text: 'I', clicked: false },
    { text: 'J', clicked: false },
    { text: 'K', clicked: false },
    { text: 'L', clicked: false },
    { text: 'M', clicked: false },
    { text: 'N', clicked: false },
    { text: 'O', clicked: false },
    { text: 'P', clicked: false },
    { text: 'Q', clicked: false },
    { text: 'R', clicked: false },
    { text: 'S', clicked: false },
    { text: 'T', clicked: false },
    { text: 'U', clicked: false },
    { text: 'V', clicked: false },
    { text: 'W', clicked: false },
    { text: 'X', clicked: false },
    { text: 'Y', clicked: false },
    { text: 'Z', clicked: false },
  ])

  const [word, setWord] = useState(randomWord)
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
  // console.log(word)

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
        <p></p>
        <img src="/snowman/step_7.png" height="300px"></img>
        <ul>
          {wordArray.map((char, i) => {
            return <li key={i}>{correctGuesses.includes(char) ? char : '_'}</li>
          })}
        </ul>
        <div className="letters">
          {alphabetArray.map((alphabet, index) => (
            <button
              key={index}
              onClick={() => handleLetterClick(alphabet.text)}
              className={alphabet.clicked ? 'clicked' : ''}
            >
              {alphabet.text}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
