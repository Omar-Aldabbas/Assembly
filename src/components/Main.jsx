import { useState } from "react";
import { Chips } from "./LanguageChips";
import { Status } from "./Status";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";

export const Main = () => {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [selected, setSelected] = useState([])

  const letterSection = currentWord.split("").map((letter, i) => (
    <Word key={`${letter}+${i}`} letter={letter} />
  ));

  const handleSelect = (key) => {
    setSelected(prev => [...prev, key])
}
console.log(selected)


  return (
    <main>
      <Status />
      <Chips />
      <section className="word">{letterSection}</section>
      <Keyboard select={handleSelect}/>
    </main>
  );
};
