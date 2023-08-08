//question-3-count a number of digits in this number
//34252 =>5 number 34252/10 => 34252 3425 342 34 3

function countsDigits(num) {
  let count = 0;
  num = Math.abs(num);
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countsDigits(-121));
console.log(countsDigits(121));
console.log(countsDigits(12165));
