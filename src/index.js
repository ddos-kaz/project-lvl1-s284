import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log("Welcome to the Brain Games");
  let name = readlineSync.question('May I have your name? ');
  console.log("Hello, " + name + "!");
}

