var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closedBtn = document.getElementsByClassName('closedBtn')[0];

modalBtn.addEventListener('click', openModal);
closedBtn.addEventListener('click', closedModal);

function openModal() {
  modal.style.display = 'block';
}
function closedModal() {
  modal.style.display = 'none';
}

var modal1 = document.getElementById('simpleModal1');
var modalBtn1 = document.getElementById('modalBtn1');
var closedBtn1 = document.getElementsByClassName('closedBtn1')[0];

modalBtn1.addEventListener('click', openModal1);
closedBtn1.addEventListener('click', closedModal1);

function openModal1() {
  modal1.style.display = 'block';
}
function closedModal1() {
  modal1.style.display = 'none';
}
