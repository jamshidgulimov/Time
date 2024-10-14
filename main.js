let time = document.getElementById('time')
let dat = document.getElementById('date')

const timeAdd = ()=>{

const date = new Date()

const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
const year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear()

const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
const second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

     time.textContent = `${hour}:${minute}:${second}`

     dat.textContent = `${day}.${month}.${year}`
}

setInterval(timeAdd, 1000)


