export default function Progress({
  index,
  quiztionsQuantity,
  points,
  TotalPoints,
}) {
  return (
    <header className="progress">
      <p>
        Quiztion <strong>{index}</strong> / {quiztionsQuantity}{" "}
      </p>
      <p>
        {" "}
        <strong>{points}</strong> / {TotalPoints}
      </p>{" "}
      <progress max={quiztionsQuantity} value={index} />
    </header>
  );
}
