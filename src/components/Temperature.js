import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const Temperature = ({ temp, temp_max, temp_min, feels_like }) => {
  const [measurement, setMeasurement] = useState("C");

  const toCelsius = (temp) => {
    return temp - 273.15;
  };

  const toFahrenheit = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };

  const convertTemp = (e) => {
    setMeasurement(e.target.value);
  };

  return (
    <div className="temperature">
      {temp && (
        <select
          value={measurement}
          onChange={convertTemp}
          className="tempSelect"
        >
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      )}
      {temp && (
        <p className="temp">
          {measurement === "C"
            ? toCelsius(temp).toFixed(1)
            : toFahrenheit(temp).toFixed(1)}{" "}
          °{measurement}
        </p>
      )}

      {temp_max && temp_min && (
        <p className="temp_secondary">
          <span className="temp_min">
            {measurement === "C"
              ? toCelsius(temp_min).toFixed(1)
              : toFahrenheit(temp_min).toFixed(1)}{" "}
            °{measurement} <FaArrowDown className="arrow"></FaArrowDown>
          </span>
          |
          <span className="temp_max">
            <FaArrowUp className="arrow"></FaArrowUp>{" "}
            {measurement === "C"
              ? toCelsius(temp_max).toFixed(1)
              : toFahrenheit(temp_max).toFixed(1)}{" "}
            °{measurement}
          </span>
        </p>
      )}

      {feels_like && (
        <p className="feels_like">
          Feels like:{" "}
          {measurement === "C"
            ? toCelsius(feels_like).toFixed(1)
            : toFahrenheit(feels_like).toFixed(1)}{" "}
          °{measurement}
        </p>
      )}
    </div>
  );
};
