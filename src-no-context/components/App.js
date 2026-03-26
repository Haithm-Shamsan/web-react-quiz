import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Quiztion from "./Quiztion.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";

import { useEffect, useReducer } from "react";

const initial = {
  quistions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highestScore: 0,
};
function reducuer(state, action) {
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
      const quistion = state.quistions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === quistion.correctOption
            ? state.points + quistion.points
            : state.points,
      };
    case "addPoints": {
      return { ...state, points: action.payload };
    }
    case "nextQuiztion":
      return { ...state, index: state.index + 1, answer: null };

    case "FinishScreen":
      return {
        ...state,
        status: "Finished",
        index: state.index + 1,
        hightestScore:
          state.points > state.highestScore ? state.points : state.highestScore,
      };
    case "restart":
      return { ...initial, quistions: state.quistions, status: "ready" };
    default:
      return new Error("action is Unknown");
  }
}
function App() {
  const [{ quistions, status, index, answer, points, highestScore }, dispatch] =
    useReducer(reducuer, initial);
  const quiztionNum = quistions.length;
  const TotalPoints = quistions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "dataRecived", payload: res }))
      .catch((error) => new Error(error));
  }, []);

  return (
    <div className="app">
      <Header />
      <Progress
        index={index}
        quiztionsQuantity={quiztionNum}
        points={points}
        TotalPoints={TotalPoints}
      />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen quiztionsLength={quiztionNum} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Quiztion
            quistion={quistions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}

        <NextButton
          dispatch={dispatch}
          answer={answer}
          index={index}
          quiztionNum={quiztionNum}
        />
        {status === "Finished" && (
          <FinishScreen
            Highscore={highestScore}
            score={points}
            maxPossiblePoints={TotalPoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
