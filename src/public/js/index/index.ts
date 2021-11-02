const loginFormDiv = document.querySelector('#login-form')
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
const link: string = "http://localhost:3000/report"

function onEvent(event: any) {
  //event.preventDefault();
  // @ts-ignore
  localStorage.setItem('username', nameInput.value);
}

function rmuser() {
  localStorage.removeItem('username')
  window.location.reload()
}

function movepage() {
  alert("3초 후 REPORT 페이지로 이동합니다.")
  setTimeout(() => {
    location.replace(link)
  }, 3000);
}

// @ts-ignore
crButton.addEventListener('click', onEvent);
const username = localStorage.getItem('username');

if (username === null){
  // @ts-ignore
  loginForm.classList.remove(hiddenClass)
  // @ts-ignore
  loginFormDiv.classList.remove(hiddenClass)
  // @ts-ignore
  rmButton.classList.add(hiddenClass)
  // @ts-ignore
  crButton.addEventListener('click', onEvent);
} else {
   // @ts-ignore
   loginFormDiv.classList.add(hiddenClass)
  // @ts-ignore
  loginForm.classList.add(hiddenClass)
  // @ts-ignore
  rmButton.classList.remove(hiddenClass)
  // @ts-ignore
  rmButton.classList.add("show")
  // @ts-ignore
  greeting.classList.remove(hiddenClass)
  // @ts-ignore
  greeting.innerText = `안녕하세요 ${username}님`
  movepage()
  // @ts-ignore
  rmButton.addEventListener('click', rmuser)
}