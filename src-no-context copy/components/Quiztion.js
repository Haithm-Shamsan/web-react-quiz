import Options from "./Options";

function Quiztion({ quistion, answer, dispatch }) {
  console.log(quistion);
  return (
    <div>
      <h4>{quistion.question}</h4>
      <Options question={quistion} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Quiztion;
