import React, { useEffect } from "react";
import { useState } from "react";

const CountdownTimer = () => {
  // Function to calculate remaining time
  function calculateTimeLeft() {
    const difference = Math.abs(new Date("2025-12-31") - new Date());
    const Days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const Minutes = Math.floor((difference / 1000 / 60) % 60);
    const Seconds = Math.floor((difference / 1000) % 60);
    return { Days, Hours, Minutes, Seconds };
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex justify-between w-[302px] h-12.5 ml-[87px]">
        {/* Days */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-primary font-medium text-[12px]">Days</div>
          <div className="font-secondary font-bold text-[32px]">
            {String(timeLeft.Days).padStart(2, "0")}
          </div>
        </div>

        <div className="text-primary font-semibold mt-3 text-2xl">:</div>

        {/* Hours */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-primary font-medium text-[12px]">Hours</div>
          <div className="font-secondary font-bold text-[32px]">
            {String(timeLeft.Hours).padStart(2, "0")}
          </div>
        </div>

        <div className="text-primary font-semibold mt-3 text-2xl">:</div>

        {/* Minutes */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-primary font-medium text-[12px]">Minutes</div>
          <div className="font-secondary font-bold text-[32px]">
            {String(timeLeft.Minutes).padStart(2, "0")}
          </div>
        </div>

        <div className="text-primary font-semibold mt-3 text-2xl">:</div>

        {/* Seconds */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-primary font-medium text-[12px]">Seconds</div>
          <div className="font-secondary font-bold text-[32px]">
            {String(timeLeft.Seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
