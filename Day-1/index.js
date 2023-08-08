//index.js

//1 //sum of all natural numbers from 1 to n

//sum of 1 to 5 => 15

//Method-1
function naturalNumbers(nums) {
  return (nums * (nums + 1)) / 2;
}
console.log(naturalNumbers(10));

//Method-2
function naturalNumbers(nums) {
  let sum = 0;
  for (let i = 0; i <= nums; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(naturalNumbers(10));
