let searchEngine = document.querySelector("#search-form");

function currentUserData(response) {
    console.log(response);
    let cityString = document.querySelector("#city");
    let currentCity = response.data.name;
    cityString.innerHTML = `${currentCity} Weather`;
    let currentTempData = Math.round(response.data.main.temp);
    let currentTempElement = document.querySelector("#temperature");
    currentTempElement.innerHTML = `${currentTempData}`;
}

function userSearch(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#city-input").value;
    if (searchCity) {
        let apiKey = "e9bb26ed626e12b32c5d3d0d23619b61";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;
        axios.get(url).then(currentUserData);
    } else {
        alert("Please provide a city to see the weather");
    }
}

searchEngine.addEventListener("submit", userSearch);



function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
}

function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 21;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);