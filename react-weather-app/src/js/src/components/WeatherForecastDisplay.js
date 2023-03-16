import WeatherCondition from "./WeatherCondition.js";

const WeatherForecastDisplay = (props) => {
    return (
        <React.Fragment>
            {props.weatherForecast.map((day) => (
                <div className="info" key={day.date}>
                    <div>
                        <p>{day.date}</p>
                    </div>
                    <div className="condition-info">
                        <p className="condition">{day.conditions}</p>
                        <WeatherCondition
                            condition={day.conditions}
                            timeframe="forecast-weather"
                        />
                    </div>
                    <div className="high-low">
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fillRule="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                                />
                            </svg>
                            {day.high}
                        </p>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fillRule="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                            {day.low}
                        </p>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default WeatherForecastDisplay;
