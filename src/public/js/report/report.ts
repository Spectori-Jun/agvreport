// @ts-ignore
const savedUsername = document.querySelector('#savedUsername')
// @ts-ignore
const companyName = savedUsername.querySelector('#companyName')
// @ts-ignore
const MachineNumber = savedUsername.querySelector('#MachineNumber')
// @ts-ignore
const whenOccur = savedUsername.querySelector('#whenOccur')
// @ts-ignore
const etc = savedUsername.querySelector('#etc')

const getUserName = localStorage.getItem('username')

// @ts-ignore
savedUsername.innerText = `REPORTER: ${getUserName}`
