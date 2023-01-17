function Game() {
  const [balance, setBalance] = useState(0);
  const [loanBalance, setLoanBalance] = useState(0);
  const standing = balance - loanBalance;

  const [isSpinning, setIsSpinning] = useState(false);
  const [bet, setBet] = useState(0);
  const [result, setResult] = useState(null);

  function borrow(amount) {
    setLoanBalance(Math.round((loanBalance + amount) * 100) / 100);
    setBalance(Math.round((balance + amount) * 100) / 100);
  }

  function placeBet(amount) {
    console.debug("bet", amount);
    setBalance(balance - amount);
    setLoanBalance(loanBalance * (1 + LOAN_RATE_PER_BET));
    setResult(null);
    setBet(amount);
    setIsSpinning(true);
  }

  function wheelStopped(result, bet, balance) {
    const multiplier = {
      win: 2,
      draw: 1,
      lose: 0,
    }[result];

    setIsSpinning(false);
    setResult(result);
    setBalance(balance + multiplier * bet);
  }

  return (
    <div className="game">
      <Balance className="balance" balance={balance} />
      <Standing className="standing" standing={standing} />
      <Bet
        className="bet"
        maxBetAmount={balance}
        onBet={(amount) => placeBet(amount)}
        bettingLocked={isSpinning}
      />
      <Banker
        className="banker"
        onBorrow={(amount) => borrow(amount)}
        onRepay={(amount) => borrow(-amount)}
        loanBalance={loanBalance}
        maxRepaymentAmount={balance}
        loanAmount={LOAN_AMOUNT}
        loanRate={LOAN_RATE_PER_BET}
      />
      <Wheel
        className="wheel"
        isSpinning={isSpinning}
        onStop={(result) => wheelStopped(result, bet, balance)}
      />
      <Outcome
        className="outcome"
        isSpinning={isSpinning}
        bet={bet}
        result={result}
      />

      <header>
        <h1>Spin the Wheel</h1>
      </header>
    </div>
  );
}
