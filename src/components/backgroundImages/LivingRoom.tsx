import React from 'react';
import frame1 from '../../images/backgroundImages/livingroom-background-with-couch.png';
import '../../styles/LivingRoom.scss'
  const LivingRoom = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="living-room" className="living-room"/>
    );
  };
  
  export default LivingRoom;