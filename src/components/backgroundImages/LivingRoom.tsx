import React from 'react';
import frame1 from '../../images/backgroundImages/living-room-minus-entryway.png';
  
  const LivingRoom = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="living-room" />
    );
  };
  
  export default LivingRoom;