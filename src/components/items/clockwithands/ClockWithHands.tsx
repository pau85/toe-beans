import React, { useState, useEffect } from 'react';
import ClockFace from './ClockFace';
import ClockHourHand from './ClockHourHand'
import ClockMinuteHand from './ClockMinuteHand'

const ClockWithHands = () => {
  const [hourDegrees, setHourDegrees] = useState(0);
  const [minuteDegrees, setMinuteDegrees] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const hourDegree = ((hour % 12) / 12) * 360 + (minute / 60) * 30;
      const minuteDegree = minute * 6;

      setHourDegrees(hourDegree);
      setMinuteDegrees(minuteDegree);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-face">
      {/* Other clock elements */}
      <ClockFace />
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      >
        <ClockHourHand hourDegrees={hourDegrees}/>
      </div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      >
        <ClockMinuteHand minuteDegrees={minuteDegrees}/>
      </div>
    </div>
  );
};

export default ClockWithHands;