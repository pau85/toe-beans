import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import '../styles/App.scss';
import ButtersSleeping from '../components/characters/butters/buttersSleepingModule/ButtersSleeping';
import LivingRoom from '../components/backgroundImages/LivingRoom';
import DiningRoom from '../components/backgroundImages/DiningRoom'
import ButtersBreathingSleepingTorso from '../components/characters/butters/buttersSleepingModule/ButtersBreathingSleepingTorso';
import Clock from '../components/items/clockwithands/clock'
function App() {

  return (
    <Router>
      <div>
        <div className="livingroom">
          <LivingRoom />
        </div>
        <div className="diningroom">
          <DiningRoom />
        </div>
        <div className="full-clock"><Clock /></div>
        <div className='butters'>
          <div className="butters-character-breathing">
            <ButtersBreathingSleepingTorso />
          </div>
          <div className="butters-character-sleeping">
            <ButtersSleeping />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;