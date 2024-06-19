import React, { useState, useEffect } from 'react';
import ButtersBlinkingQuick from "./buttersBlinkingModule/ButtersBlinkingQuick"

// Define the type of actions your character can perform
export const ACTION_TYPES = {
  BLINK: 'blink'
  // Add other actions as needed
} as const

export type ActionType = typeof ACTION_TYPES[keyof typeof ACTION_TYPES]

// Define default speeds for actions

export const SPEED_TYPES =  ['normal', 'slow', 'fast'] as const // Default blinking speed : frameCount = 10, frameRate = 2 blinks normally every 10 seconds
export type SpeedType = typeof SPEED_TYPES[number]

export const DEFAULT_SPEEDS = {
  [ACTION_TYPES.BLINK]: 'normal',
} as Record<ActionType, SpeedType>

interface ButtersProps {
    action: ActionType
    speed?: SpeedType
}

// Character component
const Butters: React.FC<ButtersProps> = ({ action, speed }) => {
  // You can manage the state of the action here if needed
  const [currentAction, setCurrentAction] = useState(action);
  const [currentSpeed, setCurrentSpeed] = useState(speed || DEFAULT_SPEEDS[action]);

  // Function to perform the action
  const performAction = () => {
    // Logic to perform the action based on currentAction and currentSpeed
    console.log(`Performing action: ${currentAction} at speed: ${currentSpeed}`);
  };

  // Effect to perform the action when the component mounts or when action/speed changes
  React.useEffect(() => {
    performAction();
  }, [currentAction, currentSpeed]);

  // Determine frameCount and frameRate based on action
  const getFrameSettings = (speed: SpeedType) => {
    switch (speed) {
      case "fast":
        return { frameCount: 5, frameRate: 2 } // Fast blinking
      case "slow":
        return { frameCount: 10, frameRate: 2 } // Slow blinking
      case "normal":
      default:
        return { frameCount: 10, frameRate: 2 } // Normal blinking
    }
  }

  const { frameCount, frameRate } = getFrameSettings(currentSpeed);

  return (
    <div>
      {/* Render your character here */}
      <ButtersBlinkingQuick frameCount={frameCount} frameRate={frameRate} />
      
      <p>Character is performing: {currentAction} at speed: {currentSpeed}</p>
    </div>
  );
};

export default Butters