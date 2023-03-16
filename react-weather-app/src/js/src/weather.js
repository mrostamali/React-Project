const API_KEY = "03810731462cc5db15cc042ef1fab260";
const ENDPOINT = "https://api.openweathermap.org/data/2.5/";

const Weather = function (attrs) {
    this.city = "";
    this.weatherData = {};

    if (attrs) {
        Object.assign(this, attrs);
    }

    this.getWeather = function () {
        return fetch(
            `${ENDPOINT}weather?q=${this.city}&units=metric&appid=${API_KEY}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let location = `${data.name}, ${data.sys.country}`,
                    date = new Date(+data.dt * 1000),
                    conditions = data.weather[0].description,
                    temp = data.main.temp,
                    feels = data.main.feels_like,
                    wind = data.wind.speed,
                    humidity = data.main.humidity,
                    pressure = data.main.pressure;

                return Object.assign(this.weatherData, {
                    location,
                    date,
                    conditions,
                    temp,
                    feels,
                    wind,
                    humidity,
                    pressure,
                });
            });
    };

    this.getForecast = function () {
        return fetch(
            `${ENDPOINT}forecast?q=${this.city}&units=metric&appid=${API_KEY}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let currDate,
                    nextDate,
                    day = -1,
                    forecast = [];

                data.list.forEach((item) => {
                    let { dt_txt: date } = item,
                        { temp_max: high, temp_min: low } = item.main,
                        { description: conditions } = item.weather[0];

                    nextDate = date.split(" ")[0];
                    if (currDate !== nextDate) {
                        currDate = nextDate;
                        day += 1;
                        forecast.push({
                            conditions,
                            date: currDate,
                            high,
                            low,
                        });
                    }

                    if (forecast[day].high < high) {
                        forecast[day].high = high;
                    }

                    if (forecast[day].low > low) {
                        forecast[day].low = low;
                    }
                });

                return Object.assign(this.weatherData, { forecast });
            });
    };
};

export { Weather };
