import { create } from "zustand";
import { Question } from "@/types";

interface QuestionsState {
	questions: Question[];
	currentQuestion: number;
	fetchQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
	questions: [],
	currentQuestion: 0,
	fetchQuestions: async (limit: number) => {
		console.log("fetchQuestions");
	},
}));
