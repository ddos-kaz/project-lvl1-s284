import { cons } from 'hexlet-pairs';
import gameFlowProcess from '../gameFlow';
import generateRandomNumber from '../utils';

const estimateProgression = (a1, n, d) => a1 + ((n - 1) * d); // Здесь я использую формулу
const floorOfRandomNumber = 0;
const ceilOfRandomNumber = 100;
const ceilOfProgressionCount = 10;
const gameFunction = () => {
  const start = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const difference = generateRandomNumber(floorOfRandomNumber, ceilOfRandomNumber);
  const missingOrder = generateRandomNumber(1, ceilOfProgressionCount);
  let index = 1;
  let question = '';
  let systemAnswer = 0;
  while (index <= ceilOfProgressionCount) {
    if (index === missingOrder) {
      question = `${question} ..`;
      systemAnswer = estimateProgression(start, index, difference);
    } else {
      question = `${question} ${estimateProgression(start, index, difference)}`;
    }
    index += 1;
  }

  return cons(question, systemAnswer);
};

const gameDescription = 'What number is missing in this progression?';

const brainProgression = () => gameFlowProcess(gameDescription, gameFunction);

export { brainProgression as default };
