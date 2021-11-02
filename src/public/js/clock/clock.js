"use strict";
var clock = document.querySelector('h2#clock');
var amOrpm = 'AM';
function getclock() {
    var date = new Date();
    var HOUR = date.getHours();
    var MIN = String(date.getMinutes()).padStart(2, '0');
    var SEC = String(date.getSeconds()).padStart(2, '0');
    if (HOUR > 12) {
        var convHour = String(HOUR - 12).padStart(2, '0');
        amOrpm = 'PM';
        var time = convHour + ":" + MIN + ":" + SEC + ":" + amOrpm;
        clock.innerText = time;
    }
    else {
        var convHour = String(HOUR).padStart(2, '0');
        var time = convHour + ":" + MIN + ":" + SEC + ":" + amOrpm;
        clock.innerText = time;
    }
}
getclock();
setInterval(getclock, 1000);
