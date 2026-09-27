import { useState } from "react";
import GameStatus from "./components/GameStatus";
import { Header } from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import { Word } from "./components/Word";
import Keyboard from "./components/Keyboard";
import { languages } from "./constant/languages";
import { getRandomWord } from "./lib/utils";
import Confetti from "react-confetti";
function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const numGuessesLeft = languages.length - 1;
  const isGameLost = wrongGuessCount >= numGuessesLeft;

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
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
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
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank.",
            )
            .join(" ")}
        </p>
      </section>
      <Keyboard
        alphabet={alphabet}
        addGuessedLetter={addGuessedLetter}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
