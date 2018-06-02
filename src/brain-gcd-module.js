import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from './randomNumberGeneration';

const floorOfRandomNumber = 1;
const ceilOfRandomNumber = 100;

const gameFunction = () => {
  const randomNumberOne = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const randomNumberTwo = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
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

const gameDescription = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => gameFlowProcess(gameDescription, gameFunction);

export { brainGCD as default };
