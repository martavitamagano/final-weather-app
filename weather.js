function weatherInfo(response){
    console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let weatherInfoElement = document.querySelector("#weatherInfo");
    let humidityElement = document.querySelector("#humidityPercentage");
    let windElement = document.querySelector("#windKm");
     let timeElement = document.querySelector("#dateTime");
     let date = new Date(response.data.time * 1000);


    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
    weatherInfoElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
}

function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let dayNumber = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];

    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(hours < 10){
        hours = `0${hours}`;
    }

    return `${day} , ${dayNumber} ${month} , ${hours}:${minutes}`;
}

function searchCity(city){
let apiKey = "4foba0te46425f633e30d965f9ae409d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(weatherInfo);
}




function handleSearch(event){

    event.preventDefault();
    let searchInput = document.querySelector("#searchBar");

searchCity(searchInput.value);
}


  




let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);