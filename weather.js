function weatherInfo(response){
   
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let weatherInfoElement = document.querySelector("#weatherInfo");
    let humidityElement = document.querySelector("#humidityPercentage");
    let windElement = document.querySelector("#windKm");
     let timeElement = document.querySelector("#dateTime");
     let date = new Date(response.data.time * 1000);
     let iconElement = document.querySelector("#icon");

     
     
     cityElement.innerHTML = response.data.city;
     temperatureElement.innerHTML = Math.round(temperature);
     weatherInfoElement.innerHTML = response.data.condition.description;
     humidityElement.innerHTML = response.data.temperature.humidity;
     timeElement.innerHTML = formatDate(date);
     windElement.innerHTML = response.data.wind.speed;
     iconElement.innerHTML= `<img src="${response.data.condition.icon_url}" alt="weather icon" class="weather-icon"></img>`;

     getForecast(response.data.city);
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

function formatDay(timestamp){
  let date = new Date(timestamp * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city){
   let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response){
 
  
  let forecastHtml = "";

response.data.daily.forEach(function(day, index){
  if(index < 5){
  forecastHtml =
  forecastHtml +

        `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDay(day.time)}</div>
        <div >
        <img class="weather-forecast-icon" src="${day.condition.icon_url}" />
        </div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature-max">
           ${Math.round(day.temperature.maximum)}°C
          </div>
          <div class="weather-forecast-temperature-min">${Math.round(day.temperature.minimum)}°C</div>
        </div>
      </div>
    `;
}
})
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
  
}

  




let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);

