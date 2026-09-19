export const Word = ({ letter }) => {
const letterElements = letter
  .split("")
  .map((char, index) => <span key={index}>{char}</span>);

  return <section className="word">{letterElements}</section>;
};
