import { useEffect, useState } from "react";
import GameStatus from "./components/GameStatus";
import { Header } from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import { Word } from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";


  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <GameStatus />
      <LanguageChips />
      <Word letter={currentWord} />
      <Keyboard alphabet={alphabet} addGuessedLetter={addGuessedLetter} />
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
