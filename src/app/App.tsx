import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion'
import '../styles/App.scss';
import LivingRoom from '../components/backgroundImages/LivingRoom.tsx';
import DiningRoom from '../components/backgroundImages/DiningRoom.tsx'
import Clock from '../components/items/clockwithands/clock.tsx'
import SleepingButters from '../components/characters/butters/buttersSleepingModule/SleepingButters.tsx';
import StandingButters from '../components/characters/butters/buttersStandingModule/ButtersStandingStill.tsx'
function App() {

  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 0.1)
  }
  const shouldDisplaySleeping = Math.random() < 0.5



  return (
    <Router>
        <motion.div 
          className="project-container"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center'}}
          >
          <div className="livingroom">
            <LivingRoom />
          </div>
          <div className="diningroom">
            <DiningRoom />
          </div>
          <div className="full-clock">
            <Clock />
          </div>
          {shouldDisplaySleeping ? (
          <div className='sleeping-butters' onClick={handleZoomIn}>
            <SleepingButters />
          </div>
          ) : (
          <div className='standing-butters'>
            <StandingButters />
          </div>
          )}
        </motion.div>
    </Router>
  );
}

export default App;