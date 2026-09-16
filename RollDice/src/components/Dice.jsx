const Dice = ({ item, hold }) => {
  return (
    <button
      style={{
        backgroundColor: item.isHeld ? "green" : "white",
        color: item.isHeld ? "white" : "black",
      }}
      onClick={() => hold(item.id)}
      aria-pressed={item.isHeld}
      aria-label={`Die with value ${item.value}, 
            ${item.isHeld ? "held" : "not held"}`}
    >
      {item.value}
    </button>
  );
};

export default Dice;
