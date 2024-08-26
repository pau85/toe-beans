import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import frame2 from 'toe-bean-frames/Completed/images/butters/sleepingbutters/2-butters-sleeping.png'
import '../../../../styles/ButtersBreathingSleepingTorso.scss'

const ButtersBreathingSleepingTorso = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    });
  }, [controls]);

  return (
    <motion.img className='butters-breathing-sleeping-torso'
      src={frame2}
      animate={controls}
      alt="Butters schleeping"
    />
  );
};

export default ButtersBreathingSleepingTorso;