import { Typography } from '@mui/material';
import { useQuestionsStore } from '../store/questions';

export default function Footer() {
  const questions = useQuestionsStore((state) => state.questions);
  let correct = 0,
    incorrect = 0,
    unanswered = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;

    if (userSelectedAnswer != null) {
      if (userSelectedAnswer === correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      unanswered++;
    }
  });

  return (
    <footer>
      <Typography variant="h6" component="h2">
        <strong>
          ✅ Correct: {correct} ❌ Incorrect: {incorrect} 🤷‍♂️
          Unanswered: {unanswered}
        </strong>
      </Typography>
    </footer>
  );
}
