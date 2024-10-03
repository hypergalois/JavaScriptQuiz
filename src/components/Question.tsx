import { type Question as QuestionType } from "../types";

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <div>
      <h2>{info.question}</h2>
      <ul>
        {info.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};
