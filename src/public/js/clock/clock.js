const clock = document.querySelector('#clock');
let amOrpm = 'AM';

function getclock() {
  const date = new Date();
  const HOUR = date.getHours();
  const MIN = String(date.getMinutes()).padStart(2, '0');
  const SEC = String(date.getSeconds()).padStart(2, '0');

  if (HOUR >= 12) {
    const convHour = String(HOUR - 12).padStart(2, '0');
    amOrpm = 'PM';
    const time = `${convHour}:${MIN}:${SEC}:${amOrpm}`;
    
    clock.innerText = time;
  } else {
    const convHour = String(HOUR).padStart(2, '0');
    const time = `${convHour}:${MIN}:${SEC}:${amOrpm}`;
    clock.innerText = time;
  }
}

getclock();
setInterval(getclock, 1000);
