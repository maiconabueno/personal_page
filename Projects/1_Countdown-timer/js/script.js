const hoursEl = document.getElementById('days');
const minutesEl = document.getElementById('hours');
const daysEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2023';

function countdown() {
    // "use strict";
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    // console.log(newYearsDate);
    // console.log(currentDate);
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    // console.log(totalSeconds);
    const hours = Math.floor(totalSeconds / 3600 / 24);
    const minutes = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, seconds);

    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    daysEl.innerHTML = formatTime(days);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);
