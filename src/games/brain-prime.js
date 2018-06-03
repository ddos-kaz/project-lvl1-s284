import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from '../utils';

const floorOfRandomNumber = 2;
const ceilOfRandomNumber = 1000;
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const systemAnswer = isPrime(randomNumber);
  return cons(question, systemAnswer);
};

const gameDescription = 'Is this number prime?';

const brainPrime = () => gameFlowProcess(gameDescription, gameFunction);

export { brainPrime as default };
