import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from '../utils';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 1000;
const isEven = number => number % 2 === 0;

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const systemAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(question, systemAnswer);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const brainEven = () => gameFlowProcess(gameDescription, gameFunction);

export { brainEven as default };
