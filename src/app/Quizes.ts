export interface QuizInterface {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export const Quiz: QuizInterface[] = [
  {
    id: 1,
    question: 'What is JavaScript?',
    options: ['Programming Language', 'Nothing', 'test'],
    answer: 'Programming Language',
  },
  {
    id: 2,
    question: 'What is TypeScript?',
    options: ['SuperSet of JavaScript', 'Nothing', 'test'],
    answer: 'SuperSet of JavaScript',
  },
];
