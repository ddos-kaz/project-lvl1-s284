import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from './randomNumberGeneration';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 100;
const operationType = ['+', '-', '*'];
const floorOfRandomOperator = 0;
const ceilOfRandomOperator = 2;
const gameFunction = () => {
  const randomNumberOne = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const randomNumberTwo = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const operator = generateRandomNumber(floorOfRandomOperator, ceilOfRandomOperator);
  const question = `${randomNumberOne} ${operationType[operator]} ${randomNumberTwo}`;
  let systemAnswer = 0;
  switch (operationType[operator]) {
    case '+':
      systemAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      systemAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      systemAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      break;
  }

  return cons(question, systemAnswer);
};

const gameDescription = 'What is the result of the expression?';

const brainCalc = () => gameFlowProcess(gameDescription, gameFunction);

export { brainCalc as default };
