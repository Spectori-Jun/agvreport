"use strict";
var loginFormDiv = document.querySelector('#login-form');
var loginForm = document.querySelector('#loginForm');
// @ts-ignore
var nameInput = loginForm.querySelector('#nameInput');
// @ts-ignore
var crButton = loginForm.querySelector('#crButton');
// @ts-ignore
var rmButton = document.querySelector('#rmButton');
// @ts-ignore
var greeting = document.querySelector('#greeting');
var hiddenClass = 'hidden';
var link = "http://localhost:3000/report";
function onEvent(event) {
    //event.preventDefault();
    // @ts-ignore
    localStorage.setItem('username', nameInput.value);
}
function rmuser() {
    localStorage.removeItem('username');
    window.location.reload();
}
function movepage() {
    alert("3초 후 REPORT 페이지로 이동합니다.");
    setTimeout(function () {
        location.replace(link);
    }, 3000);
}
// @ts-ignore
crButton.addEventListener('click', onEvent);
var username = localStorage.getItem('username');
if (username === null) {
    // @ts-ignore
    loginForm.classList.remove(hiddenClass);
    // @ts-ignore
    loginFormDiv.classList.remove(hiddenClass);
    // @ts-ignore
    rmButton.classList.add(hiddenClass);
    // @ts-ignore
    crButton.addEventListener('click', onEvent);
}
else {
    // @ts-ignore
    loginFormDiv.classList.add(hiddenClass);
    // @ts-ignore
    loginForm.classList.add(hiddenClass);
    // @ts-ignore
    rmButton.classList.remove(hiddenClass);
    // @ts-ignore
    rmButton.classList.add("show");
    // @ts-ignore
    greeting.classList.remove(hiddenClass);
    // @ts-ignore
    greeting.innerText = "\uC548\uB155\uD558\uC138\uC694 " + username + "\uB2D8";
    movepage();
    // @ts-ignore
    rmButton.addEventListener('click', rmuser);
}
