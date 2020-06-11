import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { WeatherDisplay } from "./components/WeatherDisplay";
const axios = require("axios");

const API_KEY = "c624de04ab5cbb0572f9c6f058a2da42";

function App() {
  const [error, setError] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [weather, setWeather] = useState({
    city: "",
    feels_like: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    humidity: "",
    pressure: "",
    weatherDesc: "",
    weatherMain: "",
    windDeg: "",
    windSpeed: "",
  });

  const weatherInfo = {
    city: weather.city,
    feels_like: weather.feels_like,
    temp: weather.temp,
    temp_max: weather.temp_max,
    temp_min: weather.temp_min,
    humidity: weather.humidity,
    pressure: weather.pressure,
    weatherDesc: weather.weatherDesc,
    weatherMain: weather.weatherMain,
    windDeg: weather.windDeg,
    windSpeed: weather.windSpeed,
  };

  useEffect(() => {
    if (error) {
      setDisplayError(true);
    }
    const timeout = setTimeout(() => {
      setDisplayError(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
      .then((res) => {
        if (city) {
          setWeather({
            city: res.data.name,
            feels_like: res.data.main.feels_like,
            temp: res.data.main.temp,
            temp_max: res.data.main.temp_max,
            temp_min: res.data.main.temp_min,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            weatherDesc: res.data.weather[0].description,
            weatherMain: res.data.weather[0].main,
            windDeg: res.data.wind.deg,
            windSpeed: res.data.wind.speed,
          });
        } else {
          setWeather({
            city: "",
            feels_like: "",
            temp: "",
            temp_max: "",
            temp_min: "",
            humidity: "",
            pressure: "",
            weatherDesc: "",
            weatherMain: "",
            windDeg: "",
            windSpeed: "",
          });
        }
      })
      .catch((err) => {
        // console.log(err);
        setError(err);
      });
  };

  return (
    <div className="App">
      <Form getWeather={getWeather}></Form>
      {displayError && <h2 className="error">City not found!</h2>}
      <WeatherDisplay weatherInfo={weatherInfo}></WeatherDisplay>
      <footer>
        <p>
          Created by:{" "}
          <a
            target="_blank"
            href="https://github.com/MetoA/weather-app/tree/1cb12d6dfb198a0c10b2e319c67e031526d684f6"
          >
            Meto Andov
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
