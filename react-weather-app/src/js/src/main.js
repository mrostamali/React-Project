import WeatherSearchForm from "./components/WeatherSearchForm.js";
import WeatherTempDisplay from "./components/WeatherTempDisplay.js";
import { Weather } from "./weather.js";

const App = () => {
    const [location, setLocation] = React.useState("");

    return (
        <div>
            <WeatherSearchForm setLocationCallback={setLocation} />
            <WeatherTempDisplay weather={new Weather({ city: location })} />
        </div>
    );
};

let reactContainer = document.querySelector("#react-container");
ReactDOM.render(<App />, reactContainer);
