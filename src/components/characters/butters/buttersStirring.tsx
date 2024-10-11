import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import frame2 from '../../../../public/images/quickblinkingbutters/1buttersblinking.png'

const ButtersBreathingSleepingTorso = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    });
  }, [controls]);

  return (
    <motion.img className='butters-stirring'
      src={frame2}
      animate={controls}
      alt="Butters schleeping"
    />
  );
};

export default ButtersBreathingSleepingTorso;