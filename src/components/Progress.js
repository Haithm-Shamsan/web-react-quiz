import { useQuiz } from "../contexts/quizContext";

function Progress() {
  const { index, quiztionNum, points, TotalPoints, dispatch } = useQuiz();

  const handleNextQuiztion = () => {
    dispatch({ type: "nextQuiztion" });
  };

  return (
    <header className="progress">
      <p>
        Quiztion <strong>{index + 1}</strong> / {quiztionNum}
      </p>
      <p>
        <strong>{points}</strong> / {TotalPoints}
      </p>
      <progress max={quiztionNum} value={index + 1} />
      <button onClick={handleNextQuiztion}>Next</button>
    </header>
  );
}

export default Progress;
