function Outcome({ className, isSpinning, bet, result }) {
  let content;
  switch (result) {
    case "win":
      content = <p>You won! 🎉</p>;
      break;
    case "draw":
      content = <p>Draw! You get your money back.</p>;
      break;
    case "lose":
      content = <p>Lose! Tough break. Try again.</p>;
      break;
    default:
      content = <p>You have to play to win. Place a bet!</p>;
      break;
  }
  return (
    <div className={`outcome ${result}`}>
      <h2>🎰 Outcome</h2>
      {isSpinning ? (
        <>
          <p>You bet {bet}</p>
          <p>⏱️ Waiting for the result</p>
        </>
      ) : (
        content
      )}
    </div>
  );
}
