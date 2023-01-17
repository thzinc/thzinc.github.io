function Standing({ className, standing }) {
  return (
    <div className={className}>
      <h2>Current Standing</h2>
      <figure>
        {standing < 0
          ? `(${Math.abs(standing.toFixed(2))})`
          : standing.toFixed(2)}
      </figure>
      <p>{standing < 0 && "Looks like you owe the banker…"}</p>
    </div>
  );
}
