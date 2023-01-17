function Banker({
  className,
  onBorrow,
  onRepay,
  loanBalance,
  maxRepaymentAmount,
  loanAmount,
  loanRate,
}) {
  const [repaymentAmount, setRepaymentAmount] = useState(
    Math.min(maxRepaymentAmount, loanBalance)
  );
  const validRepayment =
    0 < repaymentAmount &&
    repaymentAmount <= Math.min(maxRepaymentAmount, loanBalance);
  return (
    <div className={className}>
      <h2>🏦 Banker</h2>
      <p>
        Want a loan? It's only {loanRate * 100}% interest{" "}
        <small>per round of betting…</small>
      </p>
      <button onClick={() => onBorrow(loanAmount)}>
        Sure, give me {loanAmount}
      </button>
      {loanBalance > 0 && (
        <>
          <p>
            You owe the bank {loanBalance.toFixed(2)}. You can pay back up to{" "}
            {Math.min(maxRepaymentAmount, loanBalance).toFixed(2)}.
          </p>
          <label htmlFor="repayment">Repayment amount</label>
          <input
            type="number"
            step="1"
            id="repayment"
            value={repaymentAmount}
            onChange={(ev) =>
              setRepaymentAmount(parseFloat(ev.currentTarget.value))
            }
          />
          <button
            disabled={!validRepayment}
            onClick={() => onRepay(repaymentAmount)}
          >
            Pay {repaymentAmount.toFixed(2)}
          </button>
        </>
      )}
    </div>
  );
}
