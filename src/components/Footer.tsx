import { Typography } from '@mui/material';
import { useQuestionsStore } from '../store/questions';
import useQuestionsData from '../hooks/useQuestionsData.ts';

export default function Footer() {
  const questions = useQuestionsStore((state) => state.questions);

  const { correct, incorrect, unanswered } =
    useQuestionsData(questions);

  return (
    <footer>
      <Typography variant="h6" component="h3">
        ✅ Correct: {correct} - ❌ Incorrect: {incorrect} - 🤷‍♂️
        Unanswered: {unanswered}
      </Typography>
    </footer>
  );
}
