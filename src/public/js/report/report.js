"use strict";
// @ts-ignore
var savedUsername = document.querySelector('#savedUsername');
// @ts-ignore
var companyName = savedUsername.querySelector('#companyName');
// @ts-ignore
var MachineNumber = savedUsername.querySelector('#MachineNumber');
// @ts-ignore
var whenOccur = savedUsername.querySelector('#whenOccur');
// @ts-ignore
var etc = savedUsername.querySelector('#etc');
var getUserName = localStorage.getItem('username');
// @ts-ignore
savedUsername.innerText = "REPORTER: " + getUserName;
