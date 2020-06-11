import React, { useState, useEffect } from "react";
import { SvgWeather } from "./SvgWeather";
import cloudy from "../weather-svg/animated/cloudy.svg";
import cloudy_day_1 from "../weather-svg/animated/cloudy_day_1.svg";
import cloudy_day_2 from "../weather-svg/animated/cloudy_day_2.svg";
import cloudy_day_3 from "../weather-svg/animated/cloudy_day_3.svg";
import cloudy_night_1 from "../weather-svg/animated/cloudy_night_1.svg";
import cloudy_night_2 from "../weather-svg/animated/cloudy_night_2.svg";
import cloudy_night_3 from "../weather-svg/animated/cloudy_night_3.svg";
import day from "../weather-svg/animated/day.svg";
import night from "../weather-svg/animated/night.svg";
import rainy_1 from "../weather-svg/animated/rainy_1.svg";
import rainy_2 from "../weather-svg/animated/rainy_2.svg";
import rainy_3 from "../weather-svg/animated/rainy_3.svg";
import rainy_4 from "../weather-svg/animated/rainy_4.svg";
import rainy_5 from "../weather-svg/animated/rainy_5.svg";
import rainy_6 from "../weather-svg/animated/rainy_6.svg";
import rainy_7 from "../weather-svg/animated/rainy_7.svg";
import snowy_1 from "../weather-svg/animated/snowy_1.svg";
import snowy_2 from "../weather-svg/animated/snowy_2.svg";
import snowy_3 from "../weather-svg/animated/snowy_3.svg";
import snowy_4 from "../weather-svg/animated/snowy_4.svg";
import snowy_5 from "../weather-svg/animated/snowy_5.svg";
import snowy_6 from "../weather-svg/animated/snowy_6.svg";
import thunder from "../weather-svg/animated/thunder.svg";

export const WeatherMain = ({ city, weatherMain, weatherDesc }) => {
  const EPOCH_TIME = Math.floor(new Date().getTime() / 1000.0);
  const myDate = new Date(EPOCH_TIME * 1000);

  const [currData, setCurrData] = useState();

  // eslint-disable-next-line
  const [dayName, month, dayNum, year, currTime] = myDate
    .toString()
    .slice(0, 25)
    .split(" ");

  const [hour, min] = currTime.split(":");

  const isNight = hour >= 20 || hour <= 5;

  useEffect(() => {
    if (weatherMain === "Clouds") {
      if (isNight) {
        if (weatherDesc === "few clouds") {
          setCurrData(cloudy_night_1);
        } else if (weatherDesc === "scattered clouds") {
          setCurrData(cloudy_night_2);
        } else if (weatherDesc === "broken clouds") {
          setCurrData(cloudy_night_3);
        } else {
          setCurrData(cloudy);
        }
      } else {
        if (weatherDesc === "few clouds") {
          setCurrData(cloudy_day_1);
        } else if (weatherDesc === "scattered clouds") {
          setCurrData(cloudy_day_2);
        } else if (weatherDesc === "broken clouds") {
          setCurrData(cloudy_day_3);
        } else {
          setCurrData(cloudy);
        }
      }
    } else if (weatherMain === "Clear") {
      if (isNight) {
        setCurrData(night);
      } else {
        setCurrData(day);
      }
    } else if (weatherMain === "Snow") {
      if (
        weatherDesc.toLowerCase() === "light snow" ||
        weatherDesc.toLowerCase() === "light shower snow"
      ) {
        setCurrData(snowy_4);
      } else if (
        weatherDesc.toLowerCase() === "snow" ||
        weatherDesc.toLowerCase() === "shower snow"
      ) {
        setCurrData(snowy_5);
      } else if (
        weatherDesc.toLowerCase() === "heavy snow" ||
        weatherDesc.toLowerCase() === "heavy shower snow"
      ) {
        setCurrData(snowy_6);
      } else if (weatherDesc.toLowerCase() === "light shower sleet") {
        setCurrData(snowy_1);
      } else if (weatherDesc.toLowerCase() === "shower sleet") {
        setCurrData(snowy_2);
      } else if (weatherDesc.toLowerCase() === "sleet") {
        setCurrData(snowy_3);
      } else {
        setCurrData(rainy_7);
      }
    } else if (weatherMain === "Rain") {
      if (weatherDesc.toLowerCase() === "light intensity shower rain") {
        setCurrData(rainy_1);
      } else if (weatherDesc.toLowerCase() === "light rain") {
        setCurrData(rainy_2);
      } else if (weatherDesc.toLowerCase() === "moderate rain") {
        setCurrData(rainy_3);
      } else if (
        weatherDesc === "heavy intensity rain" ||
        weatherDesc === "shower rain"
      ) {
        setCurrData(rainy_4);
      } else if (
        weatherDesc === "very heavy rain" ||
        weatherDesc === "heavy intensity shower rain"
      ) {
        setCurrData(rainy_5);
      } else if (
        weatherDesc === "extreme rain" ||
        weatherDesc === "ragged shower rain"
      ) {
        setCurrData(rainy_6);
      } else {
        setCurrData(rainy_7);
      }
    } else if (weatherMain === "Drizzle") {
      setCurrData(rainy_4);
    } else if (weatherMain === "Thunderstorm") {
      setCurrData(thunder);
    } else if (
      weatherMain === "Mist" ||
      weatherMain === "Smoke" ||
      weatherMain === "Haze" ||
      weatherMain === "Dust" ||
      weatherMain === "Fog" ||
      weatherMain === "Sand" ||
      weatherMain === "Ash" ||
      weatherMain === "Squall" ||
      weatherMain === "Tornado"
    ) {
      setCurrData(cloudy);
    }
  }, [weatherMain, weatherDesc, isNight]);

  return (
    <div className="weatherMain">
      {city && <h1 id="cityName">{city}</h1>}
      {weatherMain && (
        <h2 id="date">
          {dayName}, {hour}:{min}
        </h2>
      )}
      {weatherMain && weatherDesc && (
        <h2 id="weatherInfo">
          {weatherMain}, {weatherDesc}.
        </h2>
      )}

      {currData && (
        <SvgWeather data={currData} weatherDesc={weatherDesc}></SvgWeather>
      )}
    </div>
  );
};
