"use strict";
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
function onEvent(event) {
    //event.preventDefault();
    // @ts-ignore
    localStorage.setItem('username', nameInput.value);
}
function rmuser() {
    localStorage.removeItem('username');
    window.location.reload();
}
// @ts-ignore
crButton.addEventListener('click', onEvent);
var username = localStorage.getItem('username');
if (username === null) {
    // @ts-ignore
    loginForm.classList.remove(hiddenClass);
    // @ts-ignore
    crButton.addEventListener('click', onEvent);
    // @ts-ignore
    rmButton.classList.add(hiddenClass);
}
else {
    // @ts-ignore
    loginForm.classList.add(hiddenClass);
    // @ts-ignore
    greeting.classList.remove(hiddenClass);
    // @ts-ignore
    greeting.innerText = "Hello " + username;
    // @ts-ignore
    rmButton.addEventListener('click', rmuser);
}
