import React, { useState, useEffect } from 'react';
import frame1 from '../images/slowblinkingbutters/1buttersblinking.png'
import frame2 from '../images/slowblinkingbutters/2buttersblinking.png'
import frame3 from '../images/slowblinkingbutters/3buttersblinking.png'
import frame4 from '../images/slowblinkingbutters/4buttersblinking.png'

// Define the props for your component
interface ButtersBlinkingSlowProps {
    frameCount: number; // Total number of frames in the animation
    frameRate: number; // Frames per second
  }
  
  const ButtersBlinkingSlow: React.FC<ButtersBlinkingSlowProps> = ({ frameCount, frameRate }) => {
    const [currentFrame, setCurrentFrame] = useState(1);
  
    useEffect(() => {
      // Set the interval for changing frames
      const interval = setInterval(() => {
        setCurrentFrame((prevFrame) => (prevFrame < frameCount ? prevFrame + 1 : 1));
      }, 1000 / frameRate);
  
      // Clear the interval on component unmount
      return () => clearInterval(interval);
    }, [frameCount, frameRate]);
  
    // Function to get the image source based on the current frame
    const getImageSrc = (frameNumber: number): string => {
      switch(frameNumber) {
        case 1: return frame1;
        case 2: return frame2;
        case 3: return frame3;
        case 4: return frame4;
        // ...case for other frames
        default: return frame1;
      }
    };
  
    return (
      <img src={getImageSrc(currentFrame)} alt="Blinking Cat" />
    );
  };
  
  export default ButtersBlinkingSlow;