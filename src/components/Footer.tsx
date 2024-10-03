import { Button, Typography } from '@mui/material';
import { useQuestionsStore } from '../store/questions';
import useQuestionsData from '../hooks/useQuestionsData.ts';

export default function Footer() {
  const questions = useQuestionsStore((state) => state.questions);
  const reset = useQuestionsStore((state) => state.reset);

  const { correct, incorrect, unanswered } =
    useQuestionsData(questions);

  return (
    <footer>
      <Typography variant="h6" component="h3">
        ✅ Correct: {correct} - ❌ Incorrect: {incorrect} - 🤷‍♂️
        Unanswered: {unanswered}
      </Typography>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>Resetear la quiz</Button>
      </div>
    </footer>
  );
}
