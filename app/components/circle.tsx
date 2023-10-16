"use client";
import React, { useState, useEffect } from "react";

const Circle = () => {
  const [time, setTime] = useState(10);
  const [circleNumber, setCircleNumber] = useState(1);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      if (circleNumber < 5) {
        setCircleNumber(circleNumber + 1);
        setTime(10);
      }
    }
  }, [time, circleNumber]);

  return (
    <div className="circle-container">
      {[1, 2, 3, 4, 5].map((number) => (
        <div
          key={number}
          className={`circle ${circleNumber === number ? "active" : ""}`}
        >
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <span className="circle-number">{number}</span>
        </div>
      ))}
      <span className="time">{time}s</span>
    </div>
  );
};

export default Circle;
