import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 0;
const CEIL_OF_RANDOM_NUMBER = 1000;
const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const brainGCDModule = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameFunction = () => {
    const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const question = `${randomNumber}`;
    const systemAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return cons(question, systemAnswer);
  };
  gameFlowProcess(gameDescription, gameFunction);
};

export { brainGCDModule as default };
