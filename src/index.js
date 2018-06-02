import readlineSync from 'readline-sync';
import brainCalcModule from './brain-calc-module';
import brainGCDModule from './brain-gcd-module';
import brainEvenModule from './brain-even-module';
import brainBalanceModule from './brain-balance-module';

const getUserName = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const brainEven = brainEvenModule;

const brainCalc = brainCalcModule;

const brainGCD = brainGCDModule;

const brainBalance = brainBalanceModule;

export { getUserName, brainEven, brainCalc, brainGCD, brainBalance };
