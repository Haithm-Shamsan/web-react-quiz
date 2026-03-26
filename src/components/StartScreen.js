import React from "react";
import { useQuiz } from "../contexts/quizContext"; // Adjust the path as needed

function StartScreen() {
  const { quiztionNum, startScreen } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{quiztionNum} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startScreen}>
        Start
      </button>
    </div>
  );
}

export default StartScreen;
