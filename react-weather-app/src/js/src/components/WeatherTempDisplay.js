import WeatherForecastDisplay from "./WeatherForecastDisplay.js";
import WeatherCondition from "./WeatherCondition.js";

const WeatherTempDisplay = (props) => {
    const [weatherData, setWeatherData] = React.useState({});

    React.useEffect(() => {
        props.weather
            .getWeather()
            .then((tempData) => {
                if (tempData instanceof Object) {
                    setWeatherData({ ...tempData });
                } else {
                    setWeatherData({ error: tempData });
                }
            })
            .catch((error) => {
                setWeatherData({ error });
            });
    }, [props.weather]);

    React.useEffect(() => {
        console.log(weatherData);
        if (weatherData.location) {
            console.log(true);
        }
    }, [weatherData]);

    const forecastButtonHandler = () => {
        props.weather.getForecast().then((tempDataWithForecast) => {
            setWeatherData({ ...tempDataWithForecast });
        });
    };

    return (
        <section>
            {weatherData.location ? (
                <React.Fragment>
                    <div className="current">
                        <div className="weather">
                            <h2>{weatherData.location}</h2>
                            <p>{weatherData.temp} &#176;C</p>
                            <WeatherCondition
                                condition={weatherData.conditions}
                                timeframe="current-weather"
                            />
                            <p className="condition top-condition">
                                {weatherData.conditions}
                            </p>
                            <p>{weatherData.date.toDateString()}</p>
                        </div>
                        <div className="highlights">
                            <div>
                                <p>Feels like</p>
                                <span>{weatherData.feels} &#176;C</span>
                            </div>
                            <div>
                                <p>Wind</p>
                                <span>{weatherData.wind} m/s</span>
                            </div>
                            <div>
                                <p>Humidity</p>
                                <span>{weatherData.humidity}&#37;</span>
                            </div>
                            <div>
                                <p>Pressure</p>
                                <span>{weatherData.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {weatherData.forecast ? (
                            <div className="forecast">
                                <WeatherForecastDisplay
                                    weatherForecast={weatherData.forecast}
                                />
                            </div>
                        ) : (
                            <div className="forecast-btn">
                                <button onClick={forecastButtonHandler}>
                                    Get forecast
                                </button>
                            </div>
                        )}
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h4>No data Found</h4>
                </React.Fragment>
            )}
        </section>
    );
};

export default WeatherTempDisplay;
