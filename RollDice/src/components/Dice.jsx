const Dice = ({ item, hold }) => {
  return (
    <button
      style={{
        backgroundColor: item.isHeld ? "green" : "white",
        color: item.isHeld ? "white" : "black",
      }}
      onClick={() => hold(item.id)}
    >
      {item.value}
    </button>
  );
};

export default Dice;
