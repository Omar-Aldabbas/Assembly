import { useState } from "react";
import { Chips } from "./LanguageChips";
import { Status } from "./Status";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";
import { languages } from "../data/languages";
import { getFarewellText, getRandomWord } from "../lib/utils";

export const Main = () => {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [selected, setSelected] = useState([]);

  //   derived data
  const wrongGuessesCount = selected.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => selected.includes(letter));

  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = selected[selected.length - 1];
  const isLastGuessIncorrect =
    selected.length > 0 && !currentWord.includes(lastGuessedLetter);
  console.log(isLastGuessIncorrect);

  // helper
  const handleGuesses = () => {
    const upperWord = currentWord.split("");

    return selected
      .map((letter) => {
        return upperWord.includes(letter) ? letter : null;
      })
      .filter(Boolean);
  };

  const guessedLetters = handleGuesses();

  // Render
  const letterSection = currentWord
    .split("")
    .map((letter, i) => (
      <Word
        key={`${letter}+${i}`}
        letter={letter}
        guessed={guessedLetters.includes(letter)}
        isOver={isGameLost}
      />
    ));

  const handleSelect = (key) => {
    setSelected((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const handleReset = () => {
    setCurrentWord(getRandomWord());
    setSelected([]);
  };
  return (
    <main>
      <Status
        won={isGameWon}
        lost={isGameLost}
        farewell={isLastGuessIncorrect}
        getText={() => getFarewellText(languages[wrongGuessesCount - 1].name)}
      />
      <Chips wrongAnswers={wrongGuessesCount} />
      <section className="word">{letterSection}</section>
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct: the letter ${lastGuessedLetter} is in the word ans it has the index of ${
                currentWord.indexOf(lastGuessedLetter) + 1
              } `
            : `Wrong: the letter ${lastGuessedLetter} is not in the word`}
          You have {languages.length - 1} attemps left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              selected.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <Keyboard
        select={handleSelect}
        selected={selected}
        word={currentWord}
        isOver={isGameOver}
      />
      {isGameOver && <button className="new-game" onClick={handleReset}>New Game</button>}
    </main>
  );
};
