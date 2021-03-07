'use strict';

let getSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
let message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');

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
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

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

document.querySelector('.again').addEventListener('click', function () {
  console.log('Clicked again');
  score = 20;
  scoreDisplay.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = getSecretNumber();
});
