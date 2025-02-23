import React, { useEffect } from "react";
import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
import { useState } from "react";
import "./Analogclock.css";

const Card = ({ weather }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles for clock hands
  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
  const minuteRotation = minutes * 6 + seconds * 0.1; // 6 degrees per minute + 0.1 degrees per second
  const secondRotation = seconds * 6; // 6 degrees per second

  if (!weather) {
    return <h1>Loading weather data</h1>;
  }
  const weatherIcon =
    weather.weather && weather.weather[0] ? weather.weather[0].icon : null;

  // Convert the Unix timestamp (dt) to a human-readable date and time
  const dateTime = new Date(weather.dt * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const formattedDate = dateTime.toLocaleDateString(); // Format date (e.g., "2/23/2024")
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div>
      <div className="clock">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondRotation}deg)` }}
        ></div>
        <div className="center-circle"></div>
      </div>
      <p>
        {formattedDate}, {formattedTime}
      </p>
      <h2> {weather.name || "N/A"} </h2>
      <h3 className="d-flex justify-content-center align-items-center">
        {" "}
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
        />{" "}
        {weather.main?.temp ?? "N/A"} °C
      </h3>
      <div>
        <p>
          {" "}
          <BiSolidLeftTopArrowCircle /> {weather.wind?.speed ?? "N/A"} m/s
        </p>
        <p> Humidity: {weather.main?.humidity ?? "N/A"} %</p>
      </div>
    </div>
  );
};

export default Card;
