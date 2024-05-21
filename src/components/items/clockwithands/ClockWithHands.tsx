import React from 'react';
import ClockFace from './ClockFace';
import './clockwithhands.scss'

const ClockWithHands = () => {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
  
    function updateClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
  
      const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
      
      if (minuteHand && hourHand){
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      }
    }
  
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the positions
  return (
    <div className="clock">
    <span className="clock-face">
      <ClockFace />
    </span>
    <span id="hour-hand" className="hand"></span>
    <span id="minute-hand" className="hand"></span>
    </div>
  );
};

export default ClockWithHands;