import React from 'react';
import frame1 from '../../../images/items/clockwithhands/1-clockwithhands.png';
  
  const ClockFace = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="clock-face" />
    );
  };
  
  export default ClockFace;