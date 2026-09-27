import { clsx } from "clsx";
const Keyboard = ({
  alphabet,
  addGuessedLetter,
  guessedLetters,
  currentWord,
}) => {
  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    console.log(className);
    return (
      <button
        className={className}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboardElements}</section>;
};

export default Keyboard;
