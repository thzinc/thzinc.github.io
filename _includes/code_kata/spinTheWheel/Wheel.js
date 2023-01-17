function Wheel({
  className,
  isSpinning = false,
  spinDurationMs = 1500,
  onStop,
  winProbability = 3,
  drawProbability = 7,
  loseProbability = 1,
}) {
  const timeoutRef = useRef(null);
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isSpinning) {
      timeoutRef.current = setTimeout(() => {
        const result =
          Math.random() * (winProbability + drawProbability + loseProbability);
        if (result <= winProbability) {
          onStop("win");
        } else if (result <= drawProbability) {
          onStop("draw");
        } else {
          onStop("lose");
        }
      }, spinDurationMs);
    }
  }, [isSpinning, spinDurationMs, timeoutRef]);
  return (
    <div className={className}>
      <div className={`icon ${isSpinning && "spinning"}`}>⚙️</div>
    </div>
  );
}
