import { checkGame } from "../utils/checkGame";
import FieldLayout from "./FieldLayout";

export default function Field({ ...props }) {
  const {
    field,
    setField,
    setIsDraw,
    setIsGameOver,
    setWinner,
    currentPlayer,
    setCurrentPlayer,
    isGameOver,
  } = props;

  const checkWinnerX = checkGame(field, "X");
  const checkWinnerO = checkGame(field, "O");
  if (checkWinnerX === "X") {
    setWinner("X");
    setIsGameOver(true);
  }
  if (checkWinnerO === "O") {
    setWinner("O");
    setIsGameOver(true);
  }
  if (checkWinnerO === "Draw" || checkWinnerX === "Draw") {
    setIsDraw(true);
    setIsGameOver(true);
  }

  const changePlayer = (player) => {
    if (player === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  return (
    <FieldLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      changePlayer={changePlayer}
      isGameOver={isGameOver}
    ></FieldLayout>
  );
}
