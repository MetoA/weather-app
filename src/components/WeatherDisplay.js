import React from "react";
import { Temperature } from "./Temperature";
import { WeatherMain } from "./WeatherMain";
import { Wind } from "./Wind";

export const WeatherDisplay = ({ weatherInfo }) => {
  const {
    city,
    feels_like,
    temp,
    temp_max,
    temp_min,
    humidity,
    weatherDesc,
    weatherMain,
    windSpeed,
  } = weatherInfo;

  return (
    <div className="weatherDisplay">
      <WeatherMain
        city={city}
        weatherMain={weatherMain}
        weatherDesc={weatherDesc}
      ></WeatherMain>
      <div className="temp_humidity_wind">
        <Temperature
          temp={temp}
          temp_min={temp_min}
          temp_max={temp_max}
          feels_like={feels_like}
        ></Temperature>
        <Wind windSpeed={windSpeed}></Wind>
        {humidity && <p>Humidity: {humidity}%</p>}
      </div>
    </div>
  );
};
