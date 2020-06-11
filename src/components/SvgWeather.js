import React from "react";

export const SvgWeather = ({ data, weatherDesc }) => {
  return (
    <object type="image/svg+xml" data={data} className="svg">
      {weatherDesc}
    </object>
  );
};
