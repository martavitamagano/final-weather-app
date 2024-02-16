function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#searchBar");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;

}


let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);