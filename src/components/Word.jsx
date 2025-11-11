export const Word = ({ letter, guessed }) => {
  return (
    <span className={guessed ? "animate-fade-in" : ""}>
      {guessed ? letter.toUpperCase() : " "}
    </span>
  );
};
