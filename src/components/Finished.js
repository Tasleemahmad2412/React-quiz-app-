import { useQuiz } from "../../contexts/QuizContext";

function Finished() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percent = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percent === 100) emoji = "💰💴";
  if (percent >= 80 && percent < 100) emoji = "🎉🎊";
  if (percent >= 50 && percent < 80) emoji = "😁🙌😸";
  if (percent >= 0 && percent < 50) emoji = "🤔💭";
  if (percent === 0) emoji = "💀☠️💀";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percent)} %)
        </strong>
      </p>
      <p className="highscore">High Score : {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default Finished;
