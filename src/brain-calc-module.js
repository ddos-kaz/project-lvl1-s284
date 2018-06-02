import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 0;
const CEIL_OF_RANDOM_NUMBER = 100;
const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));
const operationType = ['+', '-', '*'];
const FLOOR_OF_RANDOM_OPERATOR = 0;
const CEIL_OF_RANDOM_OPERATOR = 2;

const brainCalcModule = () => {
  const gameDescription = 'What is the result of the expression?';
  const gameFunction = () => {
    const randomNumberOne = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const randomNumberTwo = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const operator = generateRandomNumber(FLOOR_OF_RANDOM_OPERATOR, CEIL_OF_RANDOM_OPERATOR);
    const question = `${randomNumberOne} ${operationType[operator]} ${randomNumberTwo}`;
    let systemAnswer = 0;
    if (operationType[operator] === '+') {
      systemAnswer = randomNumberOne + randomNumberTwo;
    }
    if (operationType[operator] === '-') {
      systemAnswer = randomNumberOne - randomNumberTwo;
    }
    if (operationType[operator] === '*') {
      systemAnswer = randomNumberOne * randomNumberTwo;
    }
    return cons(question, systemAnswer);
  };
  gameFlowProcess(gameDescription, gameFunction);
};

export { brainCalcModule as default };
