import React, { useRef, useEffect } from "react";

export const Form = ({ getWeather }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={getWeather} className="form">
      <input
        ref={inputRef}
        type="text"
        name="city"
        placeholder="Enter city..."
      ></input>
      <button>Get Weather</button>
    </form>
  );
};
