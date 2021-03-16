class UI {
    constructor() {
        this.city = document.querySelector(".city");
        this.icon = document.querySelector(".icon");
        this.description = document.querySelector(".description");
        this.temp = document.querySelector(".temp");
        this.humidity = document.querySelector(".humidity");
        this.wind = document.querySelector(".wind");
        this.country = document.querySelector(".country");
        this.lon_lat = document.querySelector(".lon-lat");
    }

    displayWeather(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat } = data.coord;
        const { country } = data.sys;

        this.city.innerText = "Weather in " + name;
        this.icon.src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        this.description.innerText = description;
        this.temp.innerText = temp + "°C";
        this.humidity.innerText =
            "Humidity: " + humidity + "%";
        this.wind.innerText =
            "Wind speed: " + speed + " km/h";
        this.country.innerText = "Country: " + country;
        this.lon_lat.innerText = "Lat/Lon: " + lat + " / " + lon;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
}