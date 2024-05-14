import React from 'react';
import frame1 from '../../../images/items/clockwithhands/clock-hour-hand.png';
  
type ClockHourHandProps = {
  hourDegrees: number;
};

  const ClockHourHand = ({ hourDegrees } : ClockHourHandProps) => {

  
    return (
      <img
  src={frame1}
  className="hand hour-hand"
  style={{ transform: `rotate(${hourDegrees}deg)` }}
  alt="Hour Hand"
/>
    );
  };
  
  export default ClockHourHand;