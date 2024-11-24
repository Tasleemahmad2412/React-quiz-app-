import { useQuiz } from "../../contexts/QuizContext";

function Progress() {
  const {
    numbQuestions,
    index,

    maxPossiblePoints,
    answer,
    points,
  } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numbQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p>
        Question <stron>{index + 1}</stron> / {numbQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
