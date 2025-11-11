export const Word = ({ letter, guessed, isOver }) => {
  return (
    <span className={guessed ? "animate-fade-in" : isOver ? "animate-fade-in missed-letter" : ""}>
      {guessed ? letter.toUpperCase() : isOver ? letter.toUpperCase() : ""}
    </span>
  );
};
