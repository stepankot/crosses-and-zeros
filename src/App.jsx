import { useState } from "react";
import Field from "./Field/Field";
import Information from "./Information/Infromation";

const gameField = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(gameField);
  const [winner, setWinner] = useState(null);

  return (
    <div className="gameLayout">
      <Field
        field={field}
        setField={setField}
        setIsDraw={setIsDraw}
        setIsGameOver={setIsGameOver}
        setWinner={setWinner}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameOver={isGameOver}
      />
      <Information
        setField={setField}
        setWinner={setWinner}
        isDraw={isDraw}
        isGameOver={isGameOver}
        setIsDraw={setIsDraw}
        setCurrentPlayer={setCurrentPlayer}
        setIsGameOver={setIsGameOver}
        currentPlayer={currentPlayer}
        winner={winner}
      />
    </div>
  );
}

export default App;
