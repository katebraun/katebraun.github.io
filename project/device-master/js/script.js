var link = document.querySelector(".modal-feedback-show");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("email");
var storage = localStorage.getItem("name");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        fullname.value = storage;
        email.value = storage;
        email.focus();
    }
    else {
        fullname.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
    if (!fullname.value || !message.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
else {
    localStorage.setItem("name", fullname.value);
    localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

var mapLink = document.querySelector(".modal-map-show");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
