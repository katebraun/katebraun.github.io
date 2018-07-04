(function(){
  var mainNav = document.querySelector('.main-nav');
  var buns = document.querySelector('.main-nav__buns');
  var toggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');

  buns.addEventListener('click', function(evt) {
    evt.preventDefault();

    if(mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      toggle.classList.add('main-nav__toggle--show');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      toggle.classList.remove('main-nav__toggle--show');
    }
  });

})()
