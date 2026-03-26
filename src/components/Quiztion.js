import React from "react";
import { useQuiz } from "../contexts/quizContext"; // Adjust the path as needed

function Quiztion() {
  const { quistions, index, newAnswer } = useQuiz();
  const question = quistions[index];

  if (!question) return null;

  const handleAnswer = (answer) => {
    newAnswer(answer);
  };

  return (
    <div>
      <h2>{question.questionText}</h2>
      {question.options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiztion;
