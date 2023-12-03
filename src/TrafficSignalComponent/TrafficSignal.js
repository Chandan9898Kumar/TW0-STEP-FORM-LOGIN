import "../App.css";
import React, { useEffect, useState } from "react";

const config = {
  green: {
    duration: 3000,
    next: "yellow",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  red: {
    duration: 4000,
    next: "green",
  },
};
const TrafficSignal = () => {
  const [streetColor, setStreetColor] = useState("green");

  useEffect(() => {
    const { duration, next } = config[streetColor];

    let timer = setTimeout(() => {
      setStreetColor(next);
    }, duration);

    return () => clearTimeout(timer);
  }, [streetColor]);

  return (
    <>
      <div className="MainHeading">
        <div className="trafficHead">This is traffic signal</div>
        <div className="trafficSignal">
          <div
            className={streetColor === "green" ? "green backGreen" : "green"}
          ></div>

          <div
            className={
              streetColor === "yellow" ? "yellow backYellow" : "yellow"
            }
          ></div>

          <div className={streetColor === "red" ? "red backRed" : "red"}></div>
        </div>
      </div>
    </>
  );
};
export default TrafficSignal;
