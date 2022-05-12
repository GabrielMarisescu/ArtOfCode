export interface QuizResults {
  id: number;
  question: string;
  choosenAnswer: string;
  correctAnswer: string;
}

export interface Quiz {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizResponse {
  id: number;
  choosenAnswer: string;
}
