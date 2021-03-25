'use strict';

//Create theme change option through button select

//Function to get the secret number for guessing
const getSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
}

//Function to reset game
const resetGame = function () {
  score = 20;
  scoreDisplay.textContent = score;
  message.textContent = 'Start guessing...';
  backgroundChange.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  numberDisplay.style.width = '15rem';
  numberDisplay.textContent = '?';
  secretNumber = getSecretNumber();
}

//Variables used for DOM manipulation
let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
let message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
let numberDisplay = document.querySelector('.number');
let backgroundChange = document.querySelector('body');


document.querySelector('.theme').addEventListener('click', function () {
  //Needs to be changed to toggle
  let color = backgroundChange.style.backgroundColor;
  if (color !== 'rgb(178, 34, 34)') {
    color = '#b22222';
    document.querySelector('.label-score').textContent = 'Score: '
    document.querySelector('body').style.backgroundColor = color;
  } else if (color === 'rgb(178, 34, 34)') {
    color = '#222';
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.label-score').textContent = '💯 Score: '
  }
});

//Event listener used to check if the guess is the same as the secret number
document.querySelector('.check').addEventListener('click', function () {
  //Need to restructure this code to create function for init
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    message.textContent = '⛔️ No number';
  }
  // Guess is correct
  else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    backgroundChange.style.backgroundColor = '#60b347';
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
document.querySelector('.again').addEventListener('click', resetGame);