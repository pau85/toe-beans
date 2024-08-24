import React from 'react';
import './../../../styles/clock.scss';

const Clock = () => {
  return (
    <div className="clock">
      <div className="number number12">12</div>
      <div className="number number3">3</div>
      <div className="number number6">6</div>
      <div className="number number9">9</div>
      <div className="hand hour"></div>
      <div className="hand minute"></div>
      <div className="hand second"></div>
    </div>
  );
};

export default Clock;
