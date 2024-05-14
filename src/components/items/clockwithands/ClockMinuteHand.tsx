import React from 'react';
import frame1 from '../../../images/items/clockwithhands/clock-minute-hand.png';
  
  const ClockHourHand = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="clock-hour-hand" />
    );
  };
  
  export default ClockHourHand;