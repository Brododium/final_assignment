const searchInput = document.getElementById('navbar-search');

searchInput.addEventListener('blur', () => {
  searchInput.classList.remove('active');
});

searchInput.addEventListener('focus', () => {
  searchInput.classList.add('active');
});



const darkButton = document.querySelector('#dark-button');
const lightButton = document.querySelector("#light-button");
const logo = document.querySelector('.gh-logo');

function selectDark() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  lightButton.style.opacity = '70%';
  darkButton.style.opacity = '100%';
  logo.src = 'images/ghicon-dark.png';
}

function selectLight() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  lightButton.style.opacity = '100%';
  darkButton.style.opacity = '70%';
  logo.src = 'images/ghicon.png';
}

darkButton.addEventListener("click", selectDark);
lightButton.addEventListener("click", selectLight);