"use strict";
var clock = document.querySelector('h2#clock');
function getclock() {
    var date = new Date();
    var HOUR = String(date.getHours()).padStart(2, '0');
    var MIN = String(date.getMinutes()).padStart(2, '0');
    var SEC = String(date.getSeconds()).padStart(2, '0');
    var time = HOUR + ":" + MIN + ":" + SEC;
    clock.innerText = time;
}
getclock();
setInterval(getclock, 1000);
