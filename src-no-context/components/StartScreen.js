function StartScreen({ quiztionsLength, dispatch }) {
  return (
    <div className="start">
      <h2>welcome to the React Quiz</h2>
      <h3>{quiztionsLength} quiztions to test your react mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
