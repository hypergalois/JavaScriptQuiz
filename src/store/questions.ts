import { create } from 'zustand';
import { Question } from '@/types';
import { persist } from 'zustand/middleware';

import confetti from 'canvas-confetti';
import getAllQuestions from '../services/questions';

interface QuestionsState {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<QuestionsState>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async (limit: number) => {
        const json = await getAllQuestions(limit);

        const questions = json
          .sort(() => Math.random() - 0.5)
          .slice(0, limit);

        set({ questions });
      },
      selectAnswer: (questionId: number, answerIndex: number) => {
        set((state) => {
          const questions = state.questions.map((question) => {
            if (question.id === questionId) {
              if (question.correctAnswer === answerIndex) confetti();

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
      goNextQuestion: () => {
        const { currentQuestion, questions } = get();

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion });
        }
      },
      goPreviousQuestion: () => {
        const { currentQuestion } = get();

        const previousQuestion = currentQuestion - 1;

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion });
        }
      },
      reset: () => {
        set({ questions: [], currentQuestion: 0 });
      },
    }),
    {
      name: 'questions',
    },
  ),
);
