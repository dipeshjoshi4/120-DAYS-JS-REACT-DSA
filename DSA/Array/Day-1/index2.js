//question -2- sumof digits of a number =>1287 =>1+2+8+7 =>18

//1287 => 1287/10 remainder= 7 ,quiesent = 128|| 128/10 remainder=8 quiesent=12 || 12/10 r=2 qu=1

//all remainder => 7 + 8 + 2

function sumofDigits(num) {
  let sum = 0;
  //dont untill when so we use while
  while (num > 0) {
    sum = (num % 10) + sum;
    num = Math.floor(num);
  }
  return sum;
}

console.log(sumofDigits(1287)); //7+0=7 8+7=15 15+2=17 17+1 =>18
