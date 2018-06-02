import { cons } from 'hexlet-pairs';
import gameFlowProcess from './gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 0;
const CEIL_OF_RANDOM_NUMBER = 10000;
const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const brainGCDModule = () => {
  const gameDescription = 'Balance the given number.';
  const gameFunction = () => {
    const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const question = `${randomNumber}`;
    const strRN = String(randomNumber);
    const lenRN = strRN.length;
    let index = 0;
    let sumOfDigits = 0;
    while (index < lenRN) {
      sumOfDigits += Number(strRN[index]);
      index += 1;
    }

    const balanceNumber = (totalSum, counter) => {
      if (counter === 1) {
        return totalSum;
      }
      const n = Math.floor(totalSum / counter);
      return `${n}${balanceNumber(totalSum - n, counter - 1)}`;
    };

    const systemAnswer = balanceNumber(sumOfDigits, lenRN);
    return cons(question, systemAnswer);
  };
  gameFlowProcess(gameDescription, gameFunction);
};

export { brainGCDModule as default };
