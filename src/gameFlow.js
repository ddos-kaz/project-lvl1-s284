import readlineSync from 'readline-sync';

const gameIntroduction = () => console.log('Welcome to the Brain Games');

const gameDescription = description => console.log(`${description}\n`);

let userName = '';

const gameUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

const gameFlow = (question, systemAnswer) => {
  console.log(`Quesion: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === String(systemAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
  console.log(`Let's try again, ${userName}!\n`);
  return false;
};

const gameConclusion = () => console.log(`Congratulations, ${userName}!\n`);

export { gameIntroduction, gameDescription, gameUserName, gameFlow, gameConclusion };
