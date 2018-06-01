import readlineSync from 'readline-sync';
import { gameIntroduction, gameDescription, gameUserName, gameFlow, gameConclusion } from './gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 0;
const CEIL_OF_RANDOM_NUMBER = 100;
const GAME_ROUND_CEIL = 3;
const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const getUserName = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const brainEven = () => {
  /* console.log('Welcome to the Brain Games');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let round = 1;
  while (round <= GAME_ROUND_CEIL) {
    const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    console.log(`Quesion: ${randomNumber}`);
    const systemAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === systemAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${userName}!\n`); */
  gameIntroduction();
  gameDescription('Answer "yes" if number even otherwise answer "no".');
  gameUserName();
  const gameFunction = num => (num % 2 === 0 ? 'yes' : 'no');

  let round = 1;
  while (round <= GAME_ROUND_CEIL) {
    const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const gameQuestion = `${randomNumber}`;
    const gameAnswer = gameFunction(randomNumber);
    if (!gameFlow(gameQuestion, gameAnswer)) {
      return;
    }
    round += 1;
  }
  gameConclusion();
};

const brainCalc = () => {
  gameIntroduction();
  gameDescription('What is the result of the expression?');
  gameUserName();
  const gameFunction = (num1, num2, operation) => {
    if (operation === '+') {
      return num1 + num2;
    }
    if (operation === '-') {
      return num1 - num2;
    }
    if (operation === '*') {
      return num1 * num2;
    }
    return null;
  };
  const operationType = ['+', '-', '*'];

  let round = 1;
  while (round <= GAME_ROUND_CEIL) {
    const randomNumberOne = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const randomNumberTwo = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    const gameQuestion = `${randomNumberOne} ${operationType[round - 1]} ${randomNumberTwo}`;
    const gameAnswer = gameFunction(randomNumberOne, randomNumberTwo, operationType[round - 1]);
    if (!gameFlow(gameQuestion, gameAnswer)) {
      return;
    }
    round += 1;
  }
  gameConclusion();
};

export { brainEven, brainCalc, getUserName };
