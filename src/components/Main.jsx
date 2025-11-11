import { useState } from "react";
import { Chips } from "./LanguageChips";
import { Status } from "./Status";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";

export const Main = () => {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [selected, setSelected] = useState([]);

// now user select great now we need to know does they select the correct key or not
// so if currentword letters are the selected letter

  const letterSection = currentWord
    .split("")
    .map((letter, i) => <Word key={`${letter}+${i}`} letter={letter} />);

  const handleSelect = (key) => {
    setSelected((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };
  console.log(selected);

  return (
    <main>
      <Status />
      <Chips />
      <section className="word">{letterSection}</section>
      <Keyboard select={handleSelect} selected={selected} word={currentWord} />
    </main>
  );
};
