const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closedBtn = document.getElementsByClassName('closedBtn')[0];

let openModal = () => {
  modal.style.display = 'block';
};
modalBtn.addEventListener('click', openModal);

let closedModal = () => {
  modal.style.display = 'none';
};
closedBtn.addEventListener('click', closedModal);

const modal1 = document.getElementById('simpleModal1');
const modalBtn1 = document.getElementById('modalBtn1');
const closedBtn1 = document.getElementsByClassName('closedBtn1')[0];

const openModal1 = () => {
  modal1.style.display = 'block';
};
modalBtn1.addEventListener('click', openModal1);

const closedModal1 = () => {
  modal1.style.display = 'none';
};
closedBtn1.addEventListener('click', closedModal1);
