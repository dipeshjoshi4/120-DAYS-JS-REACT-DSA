////////////////////////////////////////////////
///freecodecamp javascript function crash course Notes
// ///////////////////////////////////////////////

// ///////////////////////////////////////////////

//defining function without expression
// function printMe() {
//   console.log("prinitng...");
// }
// printMe();
// function printThis(param) { //param is parameter
//   console.log(param);
// }
// printThis("dipesh"); //here value dipesh is map with parameter and its called argument

// ///////////////////////////////////////////////

//defining function with expression
// const printThat = function () {
//   console.log("printThat");
// };
// printThat();

// const printThat2 = function (a, b) {
//   console.log(a, b);
// };
// printThat2(10, 20);

// ///////////////////////////////////////////////

//default parameter
// function fname(a, b = 0) {
//   console.log(2 * (a + b));
// }
// fname(3); //6 //if you mistake to give argument your default parameter save you

// ///////////////////////////////////////////////

//rest parameter
//rest parameter allows a function to accept any number and infinite number of

//2 rules
//1.function defination only have one rest parameter
//2.rest parameter have always last parameter.just like name

// function restExample(x, ...y) {
//   console.log(x);
//   console.log(y);
// }
// restExample(1, 2, 3, 4, 5, 6, 7, 8, 9); //1 ,[2,3,4,5,6,7,8,9]

// ///////////////////////////////////////////////

//Arrow Function

//pros:
//less number of code
//in libraray and framework very common
//arrow function have no binding with this keyword

//normal
const add = function (x, y) {
  return x + y;
};
add(5, 5);

//Arrow function
const addArrow = (x, y) => {
  return x + y;
};
addArrow(5, 4);

//if arrow curly have one return line then remove curly too
// const add2 = (x, y) => console.log(x + y);
// add2(5, 5);

// ///////////////////////////////////////////////
// timestamp======39:00

//nested Function
// function outer() {
//   console.log("outer in the log");
// }
// outer();
