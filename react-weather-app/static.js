class WeatherTempDisplay extends React.Component {
    render() {
      const weather = this.props.weather;
      const city = weather.city ?
        weather.city :
        <span>
          {weather.city}
        </span>;
  
      return (
        <tr>
          <td>{city}</td>
          <td>{weather.temp}</td>
          <td>{weather.condition}</td>
          <td>{weather.date}</td>
          <td>{weather.fellslike}</td>
          <td>{weather.wind}</td>
          <td>{weather.humidity}</td>
          <td>{weather.pressure}</td>
        </tr>
      );
    }
};
  

class WeatherForecastDisplay extends React.Component {
    render() {
      const rows = [];
      let lastCity = null;
      
    this.props.products.forEach((city) => 
    {
        if (weather.city !== lastCity) 
        {
            rows.push(
            <ForecastRow
            weather={weather}
            key={weather.date} />
            )
        }
    })

      return (
        <table>
          <thead>
            <tr>
              <th className="hidden">Date</th>
              <th className="hidden">Conditions</th>
              <th className="hidden">High</th>
              <th className="hidden">Low</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
};
  

class WeatherSearchForm extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      );
    }
};
  
  
class WeatherAppTable extends React.Component {
    render() {
        return (
        <div>
            <SearchBar />
            <weatherTable weather={this.props.weather} />
        </div>
        );
    }
}
  
const WEATHER = [
    {
        city: "Edmonton", 
        temp: "-3.28", 
        conditions: "Overcast clouds", 
        date: "04/15/2022", 
        feelslike: "-6.99", 
        wind: "2.57", 
        Humidity: "73%", 
        pressure: "1023"
    }
];
  
const FORECASTS = [
    {city: "Edmonton", date: "04/16/2022", conditions: "Overcast clouds", high: "1.61" ,low: "-4.14" },
    {city: "Edmonton", date: "04/17/2022", conditions: "Light Snow", high: "4.18" ,low: "-2.39" },
    {city: "Edmonton", date: "04/18/2022", conditions: "Overcast clouds", high: "6.55" ,low: "-1.07" },
    {city: "Edmonton", date: "04/19/2022", conditions: "Light Rain", high: "7.1" ,low: "-0.54" },
    {city: "Edmonton", date: "04/20/2022", conditions: "Snow", high: "1.6" ,low: "-6.16" },
    {city: "Edmonton", date: "04/21/2022", conditions: "Overcast clouds", high: "2.01" ,low: "-2.11" }
];
  
  
ReactDOM.render(
<WeatherAppTable  weather={WEATHER} />,
document.getElementById('container')
);