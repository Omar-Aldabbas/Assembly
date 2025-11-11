import { languages } from "../data/languages";
import { cn } from "../lib/utils";
export const Chips = ({wrongAnswers}) => {
 

  return (
    <section className="language-chips">
      {languages.map((lang, i) => (
        <span
          key={lang +i}
          className={cn("chip font-semibold cursor-default", wrongAnswers - 1 >= i ? "lost" : "")}
          style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        >
          {lang.name}
        </span>
      ))}
    </section>
  );
};
