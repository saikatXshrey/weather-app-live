class Weather {
    constructor() {
        this.apiKey = '88b54c579dea422cad3b4ccb947060c8';
    }

    async getWeather(city) {
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);

        const weatherJson = await weatherResponse.json();

        return {
            weather: weatherJson
        }
    }
}