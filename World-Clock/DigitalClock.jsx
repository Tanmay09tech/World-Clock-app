// DigitalClock.jsx
import React, { useState, useEffect } from "react";

function DigitalClock({ timezone, city }) {
  // Setting initial time based on the timezone
  const [time, setTime] = useState(new Date().toLocaleString("en-US", { timeZone: timezone }));

  useEffect(() => {
    // Updating the time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", { timeZone: timezone }));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timezone]); // Re-run this effect if the timezone changes

  // Formatting the time to display hours, minutes, seconds, and AM/PM
  function formatTime(timeString) {
    const time = new Date(timeString);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const AMorPM = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${AMorPM}`;
  }

  // Adding leading zero to single-digit numbers
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  // Rendering the clock with city name and formatted time
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{city}: {formatTime(time)}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
