//Initialize weather 
const weather = new Weather;

//Initialize UI 
const ui = new UI;

const btn = document.querySelector('button');
const searchBar = document.querySelector('.search-bar');

//on click event trigger
btn.addEventListener('click', giveWeather)
//on enter event trigger
searchBar.addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        giveWeather();
    }
})

//gives weather
function giveWeather() {
    const cityName = searchBar.value;

    if (cityName !== '') {
        weather.getWeather(cityName)
            .then((data) => {
                //error message
                if (data.weather.message === 'city not found') {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                } else {
                    //show weather
                    ui.displayWeather(data.weather);
                }
            })
    }
}