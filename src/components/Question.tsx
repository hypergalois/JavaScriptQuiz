import { Button, Card, Typography } from "@mui/material";
import { type Question as QuestionType } from "../types";

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant="outlined">
      <Typography variant="h5">{info.question}</Typography>
    </Card>
  );
};

export default Question;
