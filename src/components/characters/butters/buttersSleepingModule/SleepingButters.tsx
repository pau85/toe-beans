import React from 'react';
//import ButtersBreathingSleepingTorso from './ButtersBreathingSleepingTorso';
import ButtersSleepingStill from './ButtersSleepingStill';

  const SleepingButters = () => {
  
    return (
        <div className='sleeping-butters'>
            <div className='butters-sleeping'>
                <ButtersSleepingStill />
            </div>
            {/* <div className='butters-breathing-sleeping-torso'>
                <ButtersBreathingSleepingTorso />
            </div> */}
        </div>
    );
  };
  
  export default SleepingButters;