import React from 'react';
import frame1 from '../../images/sleepingbutters/1-butters-sleeping.png';
  
  const ButtersSleeping = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="butters-schleeping" />
    );
  };
  
  export default ButtersSleeping;