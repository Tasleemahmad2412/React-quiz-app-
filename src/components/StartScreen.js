import { useQuiz } from "../../contexts/QuizContext";

function StartScreen() {
  const { numbQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz !</h2>
      <h3>{numbQuestions} questions to test React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
