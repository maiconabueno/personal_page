// get elements

const iconEl = document.getElementById('weather-icon');
const tempEl = document.getElementById('temperature-value');
const descEl = document.getElementById('temperature-description');
const locationEl = document.getElementById('location');
const notificationEl = document.getElementById('notification');

//App data
const weather = {};

weather.temperature = {
    unit: 'celsius'
};

// Const and Variables
const KELVIN = 273;
//API KEY
const API_KEY = "96f6ba150dbfde1782395bffef95d6a2";

//check if browser supports geolocation
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationEl.style.display = 'block';
    notificationEl.innerHTML = `<p>Browser doesn't support geolocation</p>`;
}

//set position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//show error when there's a problem with geolocation
function showError(error) {
    notificationEl.style.display = 'block';
    notificationEl.innerHTML = `<p> ${error.message}`;
}

//get info from API
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(api).then(function(response) {
        let data= response.json();
        return data;
    })
    .then(function(data) {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function() {
        displayWeather();
    });
}

function displayWeather() {
    iconEl.innerHTML = `<img src="icons/icons/${weather.iconId}.png" />`;
    tempEl.innerHTML = `${weather.temperature.value}° <span>C</span>`;
    descEl.innerHTML = weather.description;
    locationEl.innerHTML = `${weather.city}, ${weather.country}`;
}



