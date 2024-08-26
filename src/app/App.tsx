import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import '../styles/App.scss';
import LivingRoom from '../components/backgroundImages/LivingRoom.tsx';
import DiningRoom from '../components/backgroundImages/DiningRoom.tsx'
import Clock from '../components/items/clockwithands/clock.tsx'
import SleepingButters from '../components/characters/butters/buttersSleepingModule/SleepingButters.tsx';
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
        <div className='sleeping-butters'>
          <SleepingButters />
        </div>
      </div>
    </Router>
  );
}

export default App;