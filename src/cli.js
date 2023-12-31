import readlineSync from 'readline-sync';

const greetingToPlayer = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const userName = readlineSync.question('Your answer: ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

export default greetingToPlayer;
