function NextButton({ dispatch, answer, index, quiztionNum }) {
  if (answer === null) return null;

  if (index < quiztionNum - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuiztion" })}
      >
        Next
      </button>
    );
  }

  if (index === quiztionNum - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "FinishScreen" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
