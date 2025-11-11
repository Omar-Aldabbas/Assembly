import { useState } from "react";
import { languages } from "../data/languages";
export const Chips = () => {
 

  return (
    <section className="language-chips">
      {languages.map((lang, i) => (
        <span
          key={lang +i}
          className="chip font-semibold cursor-default"
          style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        >
          {lang.name}
        </span>
      ))}
    </section>
  );
};
