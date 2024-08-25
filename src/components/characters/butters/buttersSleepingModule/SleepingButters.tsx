import React from 'react';
import ButtersBreathingSleepingTorso from './ButtersBreathingSleepingTorso';
import ButtersSleeping from './ButtersSleeping';

  const SleepingButters = () => {
  
    return (
        <div className='sleeping-butters'>
            <div className='butters-sleeping'>
                <ButtersSleeping />
            </div>
            <div className='butters-breathing-sleeping-torso'>
                <ButtersBreathingSleepingTorso />
            </div>
        </div>
    );
  };
  
  export default SleepingButters;