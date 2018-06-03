import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameRoundCeil = 3;

const gameFlowProcess = (description, gameFunction) => {
  console.log('Welcome to the Brain Games');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let round = 1; round <= gameRoundCeil; round += 1) {
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
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export { gameFlowProcess as default };
