const hamburger = document.querySelector('.hamburger');

const mobile_nav = document.querySelector('.mobile_nav');

const no_show = document.querySelector('.no_show');

hamburger.addEventListener('click', function () {
  
  this.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');
  no_show.classList.toggle('is-active');
});
