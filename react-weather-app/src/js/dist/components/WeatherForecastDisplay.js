import WeatherCondition from "./WeatherCondition.js";

var WeatherForecastDisplay = function WeatherForecastDisplay(props) {
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, props.weatherForecast.map(function (day) {
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: "info",
          key: day.date
        },
        /*#__PURE__*/
        React.createElement("div", null,
        /*#__PURE__*/
        React.createElement("p", null, day.date)),
        /*#__PURE__*/
        React.createElement("div", {
          className: "condition-info"
        },
        /*#__PURE__*/
        React.createElement("p", {
          className: "condition"
        }, day.conditions),
        /*#__PURE__*/
        React.createElement(WeatherCondition, {
          condition: day.conditions,
          timeframe: "forecast-weather"
        })),
        /*#__PURE__*/
        React.createElement("div", {
          className: "high-low"
        },
        /*#__PURE__*/
        React.createElement("p", null,
        /*#__PURE__*/
        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fillRule: "currentColor",
          viewBox: "0 0 16 16"
        },
        /*#__PURE__*/
        React.createElement("path", {
          fillRule: "evenodd",
          d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
        })), day.high),
        /*#__PURE__*/
        React.createElement("p", null,
        /*#__PURE__*/
        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fillRule: "currentColor",
          viewBox: "0 0 16 16"
        },
        /*#__PURE__*/
        React.createElement("path", {
          fillRule: "evenodd",
          d: "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
        })), day.low)))
      );
    }))
  );
};

export default WeatherForecastDisplay;