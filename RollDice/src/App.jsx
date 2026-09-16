import { useState } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  function generateAllNewDice() {
    // Option 1
    // const newDice = [];
    // for (let i = 0; i < 10; i++) {
    //   const rand = Math.ceil(Math.random() * 6);
    //   newDice.push(rand);
    // }
    // return newDice;

    // Option 2
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function resetGame() {
    setDice(generateAllNewDice());
  }

  function rollDice() {
    if (gameWon) {
      resetGame();
      return;
    }

    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            },
      ),
    );
  }

  const diceElements = dice.map((item) => (
    <Dice key={item.id} item={item} hold={hold} />
  ));
  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
