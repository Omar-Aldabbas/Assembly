import { cn } from "../lib/utils";

export const Status = ({ won, lost, farewell, getText }) => {
  return (
    <section
      aria-live="polite"
      role="status"
      className={cn(
        "game-status",
        won ? "won" : lost ? "lost" : farewell ? "farewell" : ""
      )}
    >
      {won && (
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎊</p>
        </>
      )}
      {lost && (
        <>
          <h2>Game Over!</h2>
          <p>You lose! better start learning Assembly 😭</p>
        </>
      )}
      {/* {farewell && !lost && ( */}
      {farewell && !lost && (
        <>
          {/* <h2>Game Over!</h2> */}
          <p>{getText()}</p>
        </>
      )}
    </section>
  );
};
