'use strict';

//---------------------------------------------
//select everything that wee need or click then we stored in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //it gives node list
//---------------------------------------------

//---------------------------------------------
//make addeventlistner function seprately
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//-------------------------------------------

//-------------------------------------------
//1-array to one element with text content
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', open);

//2- for close the modal through cross button
btnCloseModal.addEventListener('click', close);

//3- for close the modal through overlay
overlay.addEventListener('click', close);
//-------------------------------------------

//-------------------------------------------
//keyboard events is global events so document so it happen on document
document.addEventListener('keydown', function (e) {
  // console.log(e.key); //give the key button name

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});

/////////extra info..
//to figure out which key is pressed we go for then eventobject.its nothing just a syntax which have parameter with same name and give print event all information as object
// document.addEventListener('keydown', function (dipesh) {
//   console.log(dipesh);
// });
