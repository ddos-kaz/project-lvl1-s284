import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from './randomNumberGeneration';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 1000;

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const systemAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(question, systemAnswer);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const brainEven = () => gameFlowProcess(gameDescription, gameFunction);

export { brainEven as default };
