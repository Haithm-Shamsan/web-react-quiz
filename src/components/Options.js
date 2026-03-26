import { useQuiz } from "../contexts/quizContext";

function Options() {
  const { question, answer, dispatch } = useQuiz();
  const hasAnswer = answer !== null;

  const handleAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option 
            ${index === answer ? "answer" : ""} 
            ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          onClick={() => handleAnswer(index)}
          key={index}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
