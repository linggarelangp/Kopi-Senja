// Toggle class active
const navbarNav = document.querySelector('#navbarNav');
let hamburger = document.querySelector('#hamburger-menu');

// while hamburger menu on click
document.addEventListener("click", function (e) {
  if (hamburger.contains(e.target)) {
    navbarNav.classList.toggle('active');
  }

  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
});

// Klik diluar sidebar untuk menghilangkan menu