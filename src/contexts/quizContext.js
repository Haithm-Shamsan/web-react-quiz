import { createContext, useContext, useEffect, useReducer } from "react";
import FinishScreen from "../components/FinishScreen";
import Loader from "../components/Loader";
import Error from "../components/Error";
import StartScreen from "../components/StartScreen";
import Quiztion from "../components/Quiztion";

const QuizContext = createContext();

const initial = {
  quistions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highestScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        quistions: action.payload,
        status: "ready",
      };
    case "active":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.quistions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuiztion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "Finished",
        highestScore:
          state.points > state.highestScore ? state.points : state.highestScore,
      };
    case "restart":
      return { ...initial, quistions: state.quistions, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    default:
      console.error("Unknown action type");
      return state;
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "dataRecived", payload: res }))
      .catch(() => dispatch({ type: "error" }));
  }, []);

  const { quistions, status, index, answer, points, highestScore } = state;
  const quiztionNum = quistions.length;
  const TotalPoints = quistions.reduce((prev, curr) => prev + curr.points, 0);

  const statusScreens = () => {
    switch (status) {
      case "loading":
        return <Loader />;
      case "error":
        return <Error />;
      case "ready":
        return <StartScreen />;
      case "active":
        return <Quiztion />;
      case "Finished":
        return <FinishScreen />;
      default:
        return null;
    }
  };

  return (
    <QuizContext.Provider
      value={{
        quistions,
        status,
        index,
        answer,
        points,
        highestScore,
        quiztionNum,
        TotalPoints,
        dispatch,
        statusScreens,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuiz must be used within a QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
