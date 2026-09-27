import clsx from "clsx";

export const Word = ({ currentWord, guessedLetters, isGameLost }) => {
  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter",
    );
    return (
      <span className={letterClassName} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{letterElements}</section>;
};
