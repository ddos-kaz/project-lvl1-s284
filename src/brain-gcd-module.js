import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 0;
const CEIL_OF_RANDOM_NUMBER = 100;
const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const brainGCDModule = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameFunction = () => {
    const randomNumberOne = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const randomNumberTwo = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const question = `${randomNumberOne} ${randomNumberTwo}`;
    const gcd = (num1, num2) => {
      if (num2 > 0) {
        const remainder = num1 % num2;
        return gcd(num2, remainder);
      }
      return num1;
    };
    const systemAnswer = gcd(randomNumberOne, randomNumberTwo);
    return cons(question, systemAnswer);
  };
  gameFlowProcess(gameDescription, gameFunction);
};

export { brainGCDModule as default };
