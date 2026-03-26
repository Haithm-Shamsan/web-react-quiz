import "../index.css";
import Header from "./Header";
import Main from "./Main";

import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import { useQuiz } from "../contexts/quizContext";

function App() {
  const { status, statusScreens } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Progress />
      <Main>
        {statusScreens()}
        {status === "Finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
