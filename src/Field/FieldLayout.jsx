export default function FieldLayout({
  field,
  setField,
  currentPlayer,
  changePlayer,
  isGameOver,
}) {
  return (
    <div className="gameField">
      {field.map((fieldBox, index) => (
        <div
          className="fiedlValueBox"
          key={index}
          onClick={() => {
            const newField = [...field];
            if (newField[index] !== "") {
              return;
            }
            if (isGameOver) {
              return;
            }
            newField[index] = currentPlayer;
            setField(newField);
            changePlayer(currentPlayer);
          }}
        >
          {fieldBox}
        </div>
      ))}
    </div>
  );
}
