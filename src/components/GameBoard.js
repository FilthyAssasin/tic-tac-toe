import { useState } from "react";
import Square from "./Square";

const GameBoard = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const emptyState = [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ];
  let win = false;
  const [gameState, setGameState] = useState(emptyState);
  const [counter, setCounter] = useState(0);
  const executeMove = (index) => {
    let newGameState = gameState;
    if (!win && newGameState[index].value === null) {
      newGameState[index].value = currentPlayer;
      setGameState(newGameState);
      setCounter(counter + 1);
      if (checkWinOrDraw() === true) {
        alert(`${currentPlayer} wins`);
        restartGame();
      } else if (counter === 8) {
        alert("Draw");
      }
      let nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
    }
  };

  const checkWinOrDraw = () => {
    let winCombo = ["123", "456", "789", "159", "357", "147", "258", "369"];
    for (let el in winCombo) {
      if (
        (gameState[Number(winCombo[el].charAt(0)) - 1].value === "X" &&
          gameState[Number(winCombo[el].charAt(1)) - 1].value === "X" &&
          gameState[Number(winCombo[el].charAt(2)) - 1].value === "X") ||
        (gameState[Number(winCombo[el].charAt(0)) - 1].value === "O" &&
          gameState[Number(winCombo[el].charAt(1)) - 1].value === "O" &&
          gameState[Number(winCombo[el].charAt(2)) - 1].value === "O")
      ) {
        win = true;
        break;
      }
    }

    return win;
  };

  const restartGame = () => {
    setGameState(emptyState);
    setCounter(0);
    win = false;
  };

  return (
    <>
      <div className="col-md-12 col-12 text-center">
        <h2>Current Player: {currentPlayer} </h2>
        <button
          className="btn btn-outline-danger"
          onClick={(e) => restartGame()}
        >
          Restart
        </button>
      </div>
      <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
        {gameState.map((square, key) => (
          <Square
            key={key}
            gameState={gameState}
            index={key}
            executor={executeMove}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
