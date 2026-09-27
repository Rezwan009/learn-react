import { useEffect, useState } from "react";
import GameStatus from "./components/GameStatus";
import { Header } from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import { Word } from "./components/Word";
import Keyboard from "./components/Keyboard";
import { languages } from "./constant/languages";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function addGuessedLetter(letter) {
    setGuessedLetters(
      (prevLetters) => {
        const lettersSet = new Set(prevLetters);
        lettersSet.add(letter);
        return Array.from(lettersSet);
      },
      // prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <GameStatus
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        languages={languages}
        wrongGuessCount={wrongGuessCount}
      />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        alphabet={alphabet}
        addGuessedLetter={addGuessedLetter}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}

export default App;
