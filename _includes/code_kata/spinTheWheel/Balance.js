function Balance({ className, balance }) {
  return (
    <div className={className}>
      <h2>⚖️ Balance</h2>
      <figure>{balance.toFixed(2)}</figure>
    </div>
  );
}
