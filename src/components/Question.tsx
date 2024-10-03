import {
  Button,
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { type Question as QuestionType } from '../types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionsStore } from '../store/questions';

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore(
    (state) => state.selectAnswer,
  );

  const handleClick = (answerIndex: number) => {
    selectAnswer(info.id, answerIndex);
  };

  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info;

    if (userSelectedAnswer == null) return '#444';

    if (index !== correctAnswer && index !== userSelectedAnswer)
      return '#444';

    if (index === correctAnswer) return 'green';

    if (index === userSelectedAnswer) return 'red';

    return '#444';
  };

  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'center',
        bgcolor: '#222',
        padding: 2,
      }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index}>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={() => handleClick(index)}
              variant="contained"
              sx={{
                width: '100%',
                bgcolor: getBackgroundColor(index),
              }}
            >
              <ListItemText
                sx={{
                  textAlign: 'center',
                }}
                primary={answer}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Question;
