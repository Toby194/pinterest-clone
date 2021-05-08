import React from 'react';
import './Mainboard.css';
import Pin from './Pin';

function Mainboard({ pins }) {
  // let {pins} = props;
  console.log(pins, 'what pins of mainboard');

  return (
    <div className="mainboard">
      {/* array of Pins
      map through Pins and with every pin- use Pin components */}
      {pins.map((pin) => {
        let {urls} = pin;
        
        return <Pin urls={urls} />;
      })}
    </div>
  );
}

export default Mainboard;
