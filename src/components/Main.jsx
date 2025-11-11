import { useState } from "react";
import { Chips } from "./LanguageChips";
import { Status } from "./Status";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";

export const Main = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const [selected, setSelected] = useState([]);

//  this is the simple way but we need to conditionaly took only pos value 
//   const wrongGuessesCount = selected.length - currentWord.length 

 const wrongGuessesCount = selected.filter(letter => !currentWord.includes(letter)).length

 console.log(wrongGuessesCount)

  const handleGuesses = () => {
    const upperWord = currentWord.split("");

    return selected
      .map((letter) => {
        return upperWord.includes(letter)
          ? letter
          : null;
      })
      .filter(Boolean);
  };

  const guessedLetters = handleGuesses();

  const letterSection = currentWord
    .split("")
    .map((letter, i) => (
      <Word
        key={`${letter}+${i}`}
        letter={letter}
        guessed={guessedLetters.includes(letter)}
      />
    ));

  const handleSelect = (key) => {
    setSelected((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };
  console.log(selected);

  return (
    <main>
      <Status />
      <Chips wrongAnswers={wrongGuessesCount}/>
      <section className="word">{letterSection}</section>
      <Keyboard select={handleSelect} selected={selected} word={currentWord} />
    </main>
  );
};
