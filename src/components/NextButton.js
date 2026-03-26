import { useQuiz } from "../contexts/quizContext";

function NextButton() {
  const { answer, index, quiztionNum, finishScreen, nextQuiztion } = useQuiz();
  if (answer === null) return null;

  if (index < quiztionNum - 1) {
    return (
      <button className="btn btn-ui" onClick={nextQuiztion}>
        Next
      </button>
    );
  }

  if (index === quiztionNum - 1) {
    return (
      <button className="btn btn-ui" onClick={finishScreen}>
        Finish
      </button>
    );
  }
}

export default NextButton;
