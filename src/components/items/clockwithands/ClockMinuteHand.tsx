import React from 'react';
import frame1 from '../../../images/items/clockwithhands/clock-minute-hand.png';
  
  type ClockMinuteHandProps = {
    minuteDegrees: number;

  }

  const ClockMinuteHand = ({minuteDegrees} : ClockMinuteHandProps) => {
  
    return (
<img
  src={frame1}
  className="hand minute-hand"
  style={{ transform: `rotate(${minuteDegrees}deg)` }}
  alt="minute Hand"
/>
    );
  };
  
  export default ClockMinuteHand;