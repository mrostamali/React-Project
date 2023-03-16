function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import WeatherForecastDisplay from "./WeatherForecastDisplay.js";
import WeatherCondition from "./WeatherCondition.js";

var WeatherTempDisplay = function WeatherTempDisplay(props) {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      weatherData = _React$useState2[0],
      setWeatherData = _React$useState2[1];

  React.useEffect(function () {
    props.weather.getWeather().then(function (tempData) {
      if (tempData instanceof Object) {
        setWeatherData(_objectSpread({}, tempData));
      } else {
        setWeatherData({
          error: tempData
        });
      }
    })["catch"](function (error) {
      setWeatherData({
        error: error
      });
    });
  }, [props.weather]);
  React.useEffect(function () {
    console.log(weatherData);

    if (weatherData.location) {
      console.log(true);
    }
  }, [weatherData]);

  var forecastButtonHandler = function forecastButtonHandler() {
    props.weather.getForecast().then(function (tempDataWithForecast) {
      setWeatherData(_objectSpread({}, tempDataWithForecast));
    });
  };

  return (
    /*#__PURE__*/
    React.createElement("section", null, weatherData.location ?
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("div", {
      className: "current"
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "weather"
    },
    /*#__PURE__*/
    React.createElement("h2", null, weatherData.location),
    /*#__PURE__*/
    React.createElement("p", null, weatherData.temp, " \xB0C"),
    /*#__PURE__*/
    React.createElement(WeatherCondition, {
      condition: weatherData.conditions,
      timeframe: "current-weather"
    }),
    /*#__PURE__*/
    React.createElement("p", {
      className: "condition top-condition"
    }, weatherData.conditions),
    /*#__PURE__*/
    React.createElement("p", null, weatherData.date.toDateString())),
    /*#__PURE__*/
    React.createElement("div", {
      className: "highlights"
    },
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("p", null, "Feels like"),
    /*#__PURE__*/
    React.createElement("span", null, weatherData.feels, " \xB0C")),
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("p", null, "Wind"),
    /*#__PURE__*/
    React.createElement("span", null, weatherData.wind, " m/s")),
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("p", null, "Humidity"),
    /*#__PURE__*/
    React.createElement("span", null, weatherData.humidity, "%")),
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("p", null, "Pressure"),
    /*#__PURE__*/
    React.createElement("span", null, weatherData.pressure, " hPa")))),
    /*#__PURE__*/
    React.createElement("div", null, weatherData.forecast ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "forecast"
    },
    /*#__PURE__*/
    React.createElement(WeatherForecastDisplay, {
      weatherForecast: weatherData.forecast
    })) :
    /*#__PURE__*/
    React.createElement("div", {
      className: "forecast-btn"
    },
    /*#__PURE__*/
    React.createElement("button", {
      onClick: forecastButtonHandler
    }, "Get forecast")))) :
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("h4", null, "No data Found")))
  );
};

export default WeatherTempDisplay;