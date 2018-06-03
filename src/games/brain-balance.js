import { cons } from 'hexlet-pairs';
import gameFlowProcess from '../gameFlow';
import generateRandomNumber from '../utils';

const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 10000;

const sumOfAllDigits = (strNumber) => {
  const numberStringLength = strNumber.length;
  let index = 0;
  let sumOfDigits = 0;
  while (index < numberStringLength) {
    sumOfDigits += Number(strNumber[index]);
    index += 1;
  }
  return sumOfDigits;
};

const balanceNumber = (number) => {
  const numberString = String(number);
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    const n = Math.floor(acc / counter);
    return `${n}${iter(counter - 1, acc - n)}`;
  };
  return iter(numberString.length, sumOfAllDigits(numberString));
};

const gameFunction = () => {
  const randomNumber = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const question = `${randomNumber}`;
  const systemAnswer = balanceNumber(randomNumber);
  return cons(question, systemAnswer);
};

const gameDescription = 'Balance the given number.';

const brainBalance = () => gameFlowProcess(gameDescription, gameFunction);

export { brainBalance as default };
