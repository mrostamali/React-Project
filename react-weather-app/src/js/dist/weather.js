var API_KEY = "03810731462cc5db15cc042ef1fab260";
var ENDPOINT = "https://api.openweathermap.org/data/2.5/";

var Weather = function Weather(attrs) {
  this.city = "";
  this.weatherData = {};

  if (attrs) {
    Object.assign(this, attrs);
  }

  this.getWeather = function () {
    var _this = this;

    return fetch("".concat(ENDPOINT, "weather?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (response) {
      return response.json();
    }).then(function (data) {
      var location = "".concat(data.name, ", ").concat(data.sys.country),
          date = new Date(+data.dt * 1000),
          conditions = data.weather[0].description,
          temp = data.main.temp,
          feels = data.main.feels_like,
          wind = data.wind.speed,
          humidity = data.main.humidity,
          pressure = data.main.pressure;
      return Object.assign(_this.weatherData, {
        location: location,
        date: date,
        conditions: conditions,
        temp: temp,
        feels: feels,
        wind: wind,
        humidity: humidity,
        pressure: pressure
      });
    });
  };

  this.getForecast = function () {
    var _this2 = this;

    return fetch("".concat(ENDPOINT, "forecast?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (response) {
      return response.json();
    }).then(function (data) {
      var currDate,
          nextDate,
          day = -1,
          forecast = [];
      data.list.forEach(function (item) {
        var date = item.dt_txt,
            _item$main = item.main,
            high = _item$main.temp_max,
            low = _item$main.temp_min,
            conditions = item.weather[0].description;
        nextDate = date.split(" ")[0];

        if (currDate !== nextDate) {
          currDate = nextDate;
          day += 1;
          forecast.push({
            conditions: conditions,
            date: currDate,
            high: high,
            low: low
          });
        }

        if (forecast[day].high < high) {
          forecast[day].high = high;
        }

        if (forecast[day].low > low) {
          forecast[day].low = low;
        }
      });
      return Object.assign(_this2.weatherData, {
        forecast: forecast
      });
    });
  };
};

export { Weather };