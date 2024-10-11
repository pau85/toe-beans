import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import LivingRoom from '../components/backgroundImages/LivingRoom.tsx';
import DiningRoom from '../components/backgroundImages/DiningRoom.tsx'
import Clock from '../components/items/clockwithands/clock.tsx'
import SleepingButters from '../components/characters/butters/buttersSleepingModule/SleepingButters.tsx';
import StandingButters from '../components/characters/butters/buttersStandingModule/ButtersStandingStill.tsx'
function App() {
  const shouldDisplaySleeping = Math.random() < 0.5
  return (
    <Router>
        <div className="project-container">
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
          <div className='sleeping-butters'>
            <SleepingButters />
          </div>
          ) : (
          <div className='standing-butters'>
            <StandingButters />
          </div>
          )}
        </div>
    </Router>
  );
}

export default App;