'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let scores, currentScore, activePlayer, playing;

//Functions

const init = function () {
  //Starting Conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  activePlayer = 0;
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    // 1. Generate a random number

    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display corresponding dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1 - if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const handleBtnHold = function () {
  if (playing) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if players score is >= 100
    // Finish the game
    if (scores[activePlayer] >= 100) {
      diceEl.classList.add('hidden');
      document
        .getElementById(`current--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      playing = false;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
};

// Event Listeners
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', handleBtnHold);
btnNew.addEventListener('click', init);

init();
