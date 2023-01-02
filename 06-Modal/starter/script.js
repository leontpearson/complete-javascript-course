'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function removes .hidden to modal and overlay class, opening the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// call above function when button is clicked
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// function adds .hidden to modal and overlay class, closing the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// clicking the X or overlay calls the above function, closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// when 'Escape' key is pressed and the class contains .hidden, call closeModal function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
