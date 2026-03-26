import React from "react";
import { useQuiz } from "../contexts/quizContext"; // Adjust the path as needed

function FinishScreen() {
  const { points, highestScore, restart } = useQuiz();

  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your score: {points}</p>
      <p>Highest score: {highestScore}</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default FinishScreen;
