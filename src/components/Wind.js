import React, { useState } from "react";
// TODO: IMPLEMENT THE ARROWS AND DIRECTION OF THE ARROWS(IF U CAN ROTATE WITH JS)
export const Wind = ({ windSpeed }) => {
  const [windMeasurement, setWindMeasurement] = useState("km/h");

  const convertWind = (e) => {
    setWindMeasurement(e.target.value);
  };

  const toKmh = (windSpeed) => {
    return windSpeed * 3.6;
  };

  const toMph = (windSpeed) => {
    return windSpeed * 2.237;
  };

  return (
    <div className="wind">
      {windSpeed && (
        <select
          value={windMeasurement}
          onChange={convertWind}
          className="windSelect"
        >
          <option value="km/h">km/h</option>
          <option value="mph">mph</option>
        </select>
      )}
      {windSpeed && (
        <p>
          Wind:{" "}
          {windMeasurement === "km/h"
            ? toKmh(windSpeed).toFixed(1)
            : toMph(windSpeed).toFixed(1)}{" "}
          {windMeasurement}
        </p>
      )}
    </div>
  );
};
