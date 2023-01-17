function Bet({ className, maxBetAmount, onBet, bettingLocked }) {
  const [bet, setBet] = useState(maxBetAmount);
  const validBet = 0 < bet && bet <= maxBetAmount;

  return (
    <div className={className}>
      <h2>🎟️ Bet</h2>
      {maxBetAmount > 0 ? (
        <>
          <p>
            You could double your money!{" "}
            <small>
              Or break even. <small>or lose it…</small>
            </small>
          </p>
          {bettingLocked ? (
            <>
              <p>Alright, let's see if you won!</p>
            </>
          ) : (
            <>
              {" "}
              <p>How much will you bet?</p>
              <label htmlFor="bet">Bet</label>
              <input
                id="bet"
                type="number"
                value={bet}
                onChange={(ev) => setBet(parseFloat(ev.currentTarget.value))}
              />
              <button disabled={!validBet} onClick={() => onBet(bet)}>
                Place bet 🎉
              </button>
            </>
          )}
        </>
      ) : (
        <p>
          Looks like you need some money. Talk to the banker before you try your
          luck here.
        </p>
      )}
    </div>
  );
}
