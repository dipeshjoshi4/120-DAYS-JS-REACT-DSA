'use strict';

//selecting the elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//make the intial stage
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  //1.genertaing random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.checked for rolled 1.if true the switch player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice; //currentScore = currentScore + dice;
    current0El.textContent = currentScore; //change later
  } else {
    // switch player
  }
});
