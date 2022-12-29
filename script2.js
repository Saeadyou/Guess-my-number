'use strict';
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const start = document.querySelector('.start');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high_score');
const input = document.getElementById('input');
const body = document.querySelector('body');
const question = document.querySelector('.question');

// create a random number
let rnd = Math.trunc(Math.random() * 20 + 1);
let high = 0;

const displayMessage = function (message) {
  start.textContent = message;
};

again.addEventListener('click', () => {
  body.style.backgroundColor = '#222';
  input.value = '';
  rnd = Math.trunc(Math.random() * 20 + 1);
  score.textContent = 20;
  displayMessage('start guessing...');
  question.textContent = '?';
});

check.addEventListener('click', () => {
  // if input is empty
  if (!input.value) {
    displayMessage('⛔ No number');
  } else {
    //if player wins
    if (Number(input.value) === rnd) {
      body.style.background = '#0f0';
      displayMessage('correct number 😍');
      question.textContent = rnd;
      question.style.border = '4px solid #050';
      //change high score
      if (score.textContent > highScore.textContent)
        highScore.textContent = score.textContent;
      // when guess is high
    } else if (score.textContent > 1) {
      Number(input.value) > rnd
        ? displayMessage('too big ...')
        : displayMessage('too small ...');
      score.textContent--;
      // when score = 0
    } else {
      displayMessage('You lost the game!');
      score.textContent = 0;
    }
  }
});
