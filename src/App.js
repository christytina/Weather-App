import React, { useState, useMemo } from "react";
import CityInput from "./components/CityInput";
import Weather from "./components/Weather";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(() => {
    const storedWeatherData = localStorage.getItem("weatherData");
    if (storedWeatherData) {
      return JSON.parse(storedWeatherData);
    }
    return null;
  });
  const [error, setError] = useState(null);

  useMemo(() => {
    localStorage.setItem("weatherData", JSON.stringify(weatherData), [
      weatherData,
    ]);
  });

  const fetchWeatherData = (city) => {
    const apiKey = "f00c38e0279b7bc85480c3fe775d518c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("City not found");
        setWeatherData(null);
      });
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <CityInput onSearch={fetchWeatherData} />
      {error && <p>{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default App;
