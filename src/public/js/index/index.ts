const loginForm = document.querySelector('#loginForm');
// @ts-ignore
const nameInput = loginForm.querySelector('#nameInput');
// @ts-ignore
const crButton = loginForm.querySelector('#crButton');
// @ts-ignore
const rmButton = document.querySelector('#rmButton');
// @ts-ignore
const greeting = document.querySelector('#greeting')

const hiddenClass: string = 'hidden'

function onEvent(event: any) {
  //event.preventDefault();
  // @ts-ignore
  localStorage.setItem('username', nameInput.value);
}

function rmuser() {
  localStorage.removeItem('username')
  window.location.reload()
}

// @ts-ignore
crButton.addEventListener('click', onEvent);
const username = localStorage.getItem('username');

if (username === null){
  // @ts-ignore
  loginForm.classList.remove(hiddenClass)
  // @ts-ignore
  crButton.addEventListener('click', onEvent);
  // @ts-ignore
  rmButton.classList.add(hiddenClass)
} else {
  // @ts-ignore
  loginForm.classList.add(hiddenClass)
  // @ts-ignore
  greeting.classList.remove(hiddenClass)
  // @ts-ignore
  greeting.innerText = `Hello ${username}`
  // @ts-ignore
  rmButton.addEventListener('click', rmuser)
}