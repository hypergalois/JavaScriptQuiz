import { create } from 'zustand';
import { Question } from '@/types';

interface QuestionsState {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
}

export const useQuestionsStore = create<QuestionsState>(
  (set, get) => ({
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const response = await fetch('http://localhost:5173/data.json');
      const json = await response.json();

      const questions = json
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);

      set({ questions });
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      set((state) => {
        const questions = state.questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              userSelectedAnswer: answerIndex,
              isCorrectUserAnswer:
                question.correctAnswer === answerIndex,
            };
          }
          return question;
        });

        return { questions };
      });
    },
  }),
);
