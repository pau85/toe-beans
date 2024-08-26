import React from 'react';
import ButtersBreathingSleepingTorso from './ButtersBreathingSleepingTorso';
import ButtersSleepingStill from './ButtersSleepingStill';
import '../../../../styles/sleepingButters.scss'

  const SleepingButters = () => {
  
    return (
        <div className='sleeping-butters-comb'>
            <div className='butters-sleeping-part1'>
                <ButtersSleepingStill />
            </div>
            <div className='butters-breathing-sleeping-torso-part2'>
                <ButtersBreathingSleepingTorso />
            </div>
        </div>
    );
  };
  
  export default SleepingButters;