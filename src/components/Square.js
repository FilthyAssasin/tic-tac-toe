const Square = ({ index, gameState, executor }) => {
  const drawGrid = (index) => {
    let borderString = "";

    if (index <= 2) {
      borderString += "bb";
    } else if (index >= 6) {
      borderString += "bt";
    }

    if (index === 1 || index === 4 || index === 7) {
      borderString += " bsb";
    }

    return borderString;
  };

  return (
    <div
      className={`x10 text-center game-square ${drawGrid(index)}`}
      onClick={(e) => executor(index)}
    >
      {gameState[index].value}
    </div>
  );
};

export default Square;
