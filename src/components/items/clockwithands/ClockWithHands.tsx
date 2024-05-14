import React, { useState, useEffect } from 'react';
import ClockFace from './ClockFace';
import ClockHourHand from './ClockHourHand'

const ClockWithHands = () => {
  const [hourDegrees, setHourDegrees] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const hourDegree = ((hour % 12) / 12) * 360 + (minute / 60) * 30;
      setHourDegrees(hourDegree);
    };

    const intervalId = setInterval(updateClock, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to get the image source based on the current frame
  const getImageSrc = () => {
    return ClockHourHand;
    }

  return (
    <div className="clock-face">
      {/* Other clock elements */}
      <ClockFace />
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      >
      <ClockHourHand />
      </div>
    </div>
  );
};

export default ClockWithHands;
