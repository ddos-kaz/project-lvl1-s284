import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';
import generateRandomNumber from '../utils';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 10000;

const balanceNumber = (totalSum, counter) => {
  if (counter === 1) {
    return totalSum;
  }
  const n = Math.floor(totalSum / counter);
  return `${n}${balanceNumber(totalSum - n, counter - 1)}`;
};

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const stringOfRandomNumber = String(randomNumber);
  const lengthOfRandomNumber = stringOfRandomNumber.length;
  let index = 0;
  let sumOfDigits = 0;
  while (index < lengthOfRandomNumber) {
    sumOfDigits += Number(stringOfRandomNumber[index]);
    index += 1;
  }

  const systemAnswer = balanceNumber(sumOfDigits, lengthOfRandomNumber);
  return cons(question, systemAnswer);
};

const gameDescription = 'Balance the given number.';

const brainBalance = () => gameFlowProcess(gameDescription, gameFunction);

export { brainBalance as default };
