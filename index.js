'use strict';

//Function to get the secret number for guessing
let getSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
}

//Variables used for DOM manipulation
let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
let message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
let numberDisplay = document.querySelector('.number');


//Event listener used to check if the guess is the same as the secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    message.textContent = '⛔️ No number';
  }
  // Guess is correct
  else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDisplay.textContent = secretNumber;
    numberDisplay.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!'
      scoreDisplay.textContent = 0;
    }
  }
});

//Event listener for if the player wants to play again
document.querySelector('.again').addEventListener('click', function () {
  console.log('Clicked again');
  score = 20;
  scoreDisplay.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  numberDisplay.style.width = '15rem';
  numberDisplay.textContent = '?';
  secretNumber = getSecretNumber();
});
