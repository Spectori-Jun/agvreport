const clock: any | null = document.querySelector('h2#clock');

function getclock() {
  const date = new Date();
  const HOUR = String(date.getHours()).padStart(2, '0');
  const MIN = String(date.getMinutes()).padStart(2, '0');
  const SEC = String(date.getSeconds()).padStart(2, '0');

  const time = `${HOUR}:${MIN}:${SEC}`;
  clock.innerText = time;
}

getclock();
setInterval(getclock, 1000);
