import React from 'react';
import frame1 from '../../images/backgroundImages/dining-room.png';
import '../../styles/Diningroom.scss'
  const DiningRoom = () => {
  
    // Function to get the image source based on the current frame
    const getImageSrc = () => {
      return frame1;
      }
  
    return (
      <img src={getImageSrc()} alt="dining-room" className="dining-room"/>
    );
  };
  
  export default DiningRoom;