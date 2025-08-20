import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
      <div className="flex items-center space-x-1">
        <span className="text-gray-600 hidden sm:inline">Days</span>
        <span className="text-gray-600 sm:hidden">D</span>
        <span className="font-bold text-gray-900">{timeLeft.days.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-gray-400">:</span>
      <div className="flex items-center space-x-1">
        <span className="text-gray-600 hidden sm:inline">Hours</span>
        <span className="text-gray-600 sm:hidden">H</span>
        <span className="font-bold text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-gray-400">:</span>
      <div className="flex items-center space-x-1">
        <span className="text-gray-600 hidden sm:inline">Minutes</span>
        <span className="text-gray-600 sm:hidden">M</span>
        <span className="font-bold text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-gray-400">:</span>
      <div className="flex items-center space-x-1">
        <span className="text-gray-600 hidden sm:inline">Seconds</span>
        <span className="text-gray-600 sm:hidden">S</span>
        <span className="font-bold text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
