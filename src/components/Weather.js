import React from "react";
import "./Weather.css";

const Weather = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return "🌞";
      case "01n":
        return "🌙";
      case "02d":
      case "02n":
        return "⛅";
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return "☁";
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return "🌧";
      case "11d":
      case "11n":
        return "⛈";
      case "13d":
      case "13n":
        return "❄";
      case "50d":
      case "50n":
        return "🌫️";
      default:
        return "❓";
    }
  };

  return (
    <div className="weather-container">
      <h2 className="city-name">{name}</h2>
      <div className="weather-details">
        <p className="temperature">Temperature: {main.temp}°C</p>
        <p className="description">Weather: {weather[0].description}</p>
        <p className="wind-speed">Wind Speed: {wind.speed} m/s</p>
        <p className="weather-icon">
          Weather Icon: {getWeatherIcon(weather[0].icon)}
        </p>
      </div>
    </div>
  );
};

export default Weather;
