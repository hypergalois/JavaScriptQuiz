import { useQuestionsStore } from "../store/questions";

export default function Game() {
  const { questions, currentQuestion } = useQuestionsStore((state) => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
  }));

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo}
    </>
  );
}
