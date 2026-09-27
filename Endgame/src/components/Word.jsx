export const Word = ({ currentWord, guessedLetters }) => {
  const letterElements = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  return <section className="word">{letterElements}</section>;
};
