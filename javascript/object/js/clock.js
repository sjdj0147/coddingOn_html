let today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const day1= today.getDay();
let day2=''
switch(day1){
    case 0:
        day2='일요일';
        break;
    case 1:
        day2='월요일';
        break;
    case 2:
        day2='화요일';
        break;
    case 3:
        day2='수요일';
        break;
    case 4:
        day2='목요일';
        break;
    case 5:
        day2='금요일';
        break;
    case 6:
        day2='토요일';
        break;
}
let display = document.getElementById("today");
display.innerHTML = `<h3>${year}년 ${month}월 ${date}일 ${day2}</h3>`



setInterval(() => {
    let now = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = (hours>12)? '오후 '+ (hours-12) :'오전 '+hours;
    hours = (hours<10)? '0'+hours: hours
    minutes = (minutes<10)? '0'+minutes: minutes
    seconds = (seconds<10)? '0'+seconds: seconds

    let displayTime = document.getElementById('clock');
    displayTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
