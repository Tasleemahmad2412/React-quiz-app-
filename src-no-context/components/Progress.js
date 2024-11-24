function Progress({ index, numbQuestions, points, maxPossiblePoints, answer }) {
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
