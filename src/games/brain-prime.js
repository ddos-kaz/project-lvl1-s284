import { cons } from 'hexlet-pairs';
import gameFlowProcess from '../gameFlow';
import generateRandomNumber from '../utils';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 1000;
const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i < Math.floor(Math.sqrt(number)); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const systemAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(question, systemAnswer);
};

const gameDescription = 'Is this number prime?';

const brainPrime = () => gameFlowProcess(gameDescription, gameFunction);

export { brainPrime as default };
