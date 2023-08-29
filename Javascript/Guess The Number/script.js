'use strict';

/*
//for see in console to what output
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!';

console.log(document.querySelector('.message').textContent);

//for see in console to what output
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = '10';
document.querySelector('.number').textContent = '13';
document.querySelector('.guess').value = '23';

//for see in console to what output
console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

/////////////////////////////////////
//72
// console.log(document.querySelector('.message').textContent);

////////////////////////////////////
//73
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//input element
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

////////////////////////////////////
//74
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number!';
//   }
// });

////////////////////////////////////
//75

//define secreat Number
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!!';
  }
  //when there is player guess is right
  else if (guess === secreatNumber) {
    document.querySelector('.message').textContent = 'correct Number!!!';

    document.querySelector('.number').textContent = secreatNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guess is wrong
  else if (guess !== secreatNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secreatNumber ? 'To High!!!' : 'to low!!';
      score--; //score=score-1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lost The Game!!!Sorry';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the player guess is high

  //   else if (guess > secreatNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'To High!!!';
  //       score--; //score=score-1
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You Lost The Game!!!Sorry';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //when the player guess is low

  //   else if (guess < secreatNumber) {
  //     document.querySelector('.message').textContent = 'To Low!!!';
  //     score--; //score=score+1
  //     document.querySelector('.score').textContent = score;
  //   }
});

//76
//coding challange:1
//implement again button reset functionality,so that player canmake a new guess!here is how

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
