const Keyboard = ({ alphabet, addGuessedLetter }) => {
  const keyboardElements = alphabet.split("").map((letter) => (
    <button key={letter} onClick={() => addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
  ));

  return <section className="keyboard">{keyboardElements}</section>;
};

export default Keyboard;
