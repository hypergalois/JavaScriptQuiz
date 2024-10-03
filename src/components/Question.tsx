import {
  Button,
  Card,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import { type Question as QuestionType } from '../types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Question = ({
  info,
}: {
  info: QuestionType;
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'left',
        bgcolor: '#222',
        padding: 2,
      }}
    >
      <Typography variant="h5">
        {info.question}
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }}>
        {info.answers.map(
          (answer, index) => (
            <ListItem key={index}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  bgcolor: '#444',
                }}
              >
                {answer}
              </Button>
            </ListItem>
          ),
        )}
      </List>
    </Card>
  );
};

export default Question;
