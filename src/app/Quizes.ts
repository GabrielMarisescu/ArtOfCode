import { Quiz } from './interfaces/quiz-interfaces';

export const quizMock: Quiz[] = [
  {
    id: 1,
    question: 'true + false',
    options: ['truefalse', '1', 'SyntaxError'],
    answer: '1',
  },
  {
    id: 2,
    question: '[1, 2, 3] + [4, 5, 6]',
    options: ['1,2,3,4,5,6', '1,2,34,5,6', 'NaN'],
    answer: '1,2,34,5,6',
  },
  {
    id: 3,
    question: '0.2 + 0.1 === 0.3',
    options: ['true', 'false', 'NaN'],
    answer: 'false',
  },
  {
    id: 4,
    question: ' !!"" ',
    options: ['false', 'true', 'undefined'],
    answer: 'false',
  },
  {
    id: 5,
    question: 'true == "true"',
    options: ['SyntaxError', 'true', 'false'],
    answer: 'false',
  },
  {
    id: 6,
    question: 'null + 0',
    options: ['NaN', '0', 'TypeError'],
    answer: '0',
  },
  {
    id: 7,
    question: '0/0',
    options: ['NaN', 'SyntaxError', 'infinity'],
    answer: 'NaN',
  },
  {
    id: 8,
    question: '"" - 1',
    options: ['1', '-1', 'NaN'],
    answer: '-1',
  },
  {
    id: 9,
    question: '!5 + !5',
    options: ['0', '10', 'NaN'],
    answer: '0',
  },
  {
    id: 10,
    question: 'typeof NaN',
    options: ['number', 'object', 'undefined'],
    answer: 'number',
  },
];
