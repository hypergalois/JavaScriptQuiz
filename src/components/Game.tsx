import { Typography, Stack, IconButton } from '@mui/material';
import { useQuestionsStore } from '../store/questions';
import Question from './Question';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
} from '@mui/icons-material';
import Footer from './Footer';

export default function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore(
    (state) => state.currentQuestion,
  );
  const goNextQuestion = useQuestionsStore(
    (state) => state.goNextQuestion,
  );
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion,
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
        marginBottom={2}
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        <Typography variant="h4">
          {currentQuestion + 1} / {questions.length}
        </Typography>
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
}
