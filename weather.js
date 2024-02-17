function weatherInfo(response){
    console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let weatherInfoElement = document.querySelector("#weatherInfo");
    let humidityElement = document.querySelector("#humidityPercentage");
    let windElement = document.querySelector("#windKm");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    weatherInfoElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
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