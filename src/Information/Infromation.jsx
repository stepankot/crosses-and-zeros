import InformationLayout from "./InformationLayout";

export default function Information({ ...props }) {
  const {
    setField,
    isDraw,
    isGameOver,
    setIsDraw,
    setCurrentPlayer,
    setIsGameOver,
    currentPlayer,
    winner,
    setWinner,
  } = props;

  const resetGame = () => {
    setField(["", "", "", "", "", "", "", "", ""]);
    setIsDraw(false);
    setCurrentPlayer("X");
    setIsGameOver(false);
    setWinner(null);
  };

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameOver={isGameOver}
      isDraw={isDraw}
      winner={winner}
      resetGame={resetGame}
    />
  );
}
