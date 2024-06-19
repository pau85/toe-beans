import React from 'react';
import './App.scss';
import ButtersSleeping from '../components/characters/butters/buttersSleepingModule/ButtersSleeping';
// import ClockWithHands from '../components/items/clockwithands/ClockWithHands';
// import LivingRoom from '../components/backgroundImages/LivingRoom';

function App() {
  return (
    <div>
      {/* <div className="clock-item">
        <ClockWithHands />
      </div> */}
      <div className="butters-character">
        <ButtersSleeping />
      </div>
    </div>
  );
}

export default App;
