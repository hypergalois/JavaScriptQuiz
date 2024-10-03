import { Question } from '../types';

export default function useQuestionsData(questions: Question[]) {
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

  return {
    correct,
    incorrect,
    unanswered,
  };
}
