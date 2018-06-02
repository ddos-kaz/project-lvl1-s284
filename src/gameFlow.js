import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const GAME_ROUND_CEIL = 3;

const gameFlowProcess = (description, gameFunction) => {
  console.log('Welcome to the Brain Games');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let round = 1;
  while (round <= GAME_ROUND_CEIL) {
    const pair = gameFunction();
    const question = car(pair);
    console.log(`Quesion: ${question}`);
    const systemAnswer = String(cdr(pair));
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === systemAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return false;
    }
    round += 1;
  }
  console.log(`Congratulations, ${userName}!\n`);
  return false;
};

export { gameFlowProcess as default };
