import NextButton from "./NextButton";

function FinishScreen({ Highscore, score, maxPossiblePoints, dispatch }) {
  return (
    <>
      <p className="result">
        {" "}
        Fuck you Nigga Your Scored <strong>{score}</strong> out of{" "}
        {maxPossiblePoints}
      </p>
      ((Highscore:{Highscore} points))
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Finish
      </button>
    </>
  );
}

export default FinishScreen;
