var linkMenu = document.querySelector(".page-header__menu");
var popupMenu = document.querySelector(".modal-menu");
var closeMenu = document.querySelector(".modal-menu__close");

linkMenu.addEventListener("click", function (event) {
    event.preventDefault();
    popupMenu.classList.add("modal-menu-show");
});

closeMenu.addEventListener("click", function (event) {
  event.preventDefault();
  popupMenu.classList.remove("modal-menu-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popupMenu.classList.contains("modal-menu-show")) {
            popupMenu.classList.remove("modal-menu-show");
        }
    }
});

var linkSearch = document.querySelector(".page-header__search");
var popupSearch = document.querySelector(".modal-search");
var closeSearch = document.querySelector(".modal-search__close");

linkSearch.addEventListener("click", function (event) {
    event.preventDefault();
    popupSearch.classList.add("modal-search-show");
});

closeSearch.addEventListener("click", function (event) {
  event.preventDefault();
  popupSearch.classList.remove("modal-search-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popupSearch.classList.contains("modal-search-show")) {
            popupSearch.classList.remove("modal-search-show");
        }
    }
});

var linkShare = document.querySelector(".page-header__share");
var popupShare = document.querySelector(".modal-share");
var closeShare = document.querySelector(".modal-share__close");

linkShare.addEventListener("click", function (event) {
    event.preventDefault();
    popupShare.classList.add("modal-share-show");
});

closeShare.addEventListener("click", function (event) {
  event.preventDefault();
  popupShare.classList.remove("modal-share-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popupShare.classList.contains("modal-share-show")) {
            popupShare.classList.remove("modal-share-show");
        }
    }
});

var linkCart = document.querySelector(".page-header__cart");
var popupCart = document.querySelector(".modal-cart");
var closeCart = document.querySelector(".modal-cart__close");

linkCart.addEventListener("click", function (event) {
    event.preventDefault();
    popupCart.classList.add("modal-cart-show");
});

closeCart.addEventListener("click", function (event) {
  event.preventDefault();
  popupCart.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popupCart.classList.contains("modal-cart-show")) {
            popupCart.classList.remove("modal-cart-show");
        }
    }
});
