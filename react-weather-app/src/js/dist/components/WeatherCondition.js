var WeatherCondition = function WeatherCondition(value) {
  var path;
  var condition = value.condition.toLowerCase();

  if (condition.includes("overcast")) {
    path = "assets/overcast.svg";
  } else if (condition.includes("cloud")) {
    path = "assets/cloudy.svg";
  } else if (condition.includes("drizzle")) {
    path = "assets/drizzle.svg";
  } else if (condition.includes("fog")) {
    path = "assets/fog.svg";
  } else if (condition.includes("hail")) {
    path = "assets/hail.svg";
  } else if (condition.includes("haze")) {
    path = "assets/haze.svg";
  } else if (condition.includes("rain")) {
    path = "assets/rain.svg";
  } else if (condition.includes("snow")) {
    path = "assets/snow.svg";
  } else if (condition.includes("wind")) {
    path = "assets/wind.svg";
  } else {
    path = "assets/clear.svg";
  }

  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("img", {
      src: path,
      alt: value.condition,
      className: value.timeframe
    }))
  );
};

export default WeatherCondition;