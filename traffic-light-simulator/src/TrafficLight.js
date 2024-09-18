import React, {useContext} from 'react';
import {TrafficLightContext} from './TrafficLightContext';
import RedLight from './RedLight';
import YellowLight from './YellowLight';
import GreenLight from './GreenLight';
import './TrafficLight.css';

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className="traffic-light">
      <RedLight active={state.currentLight === 'red'} countdown={state.currentLight === 'red' ? state.countdown : null} />
      <YellowLight active={state.currentLight === 'yellow'} countdown={state.currentLight === 'yellow' ? state.countdown : null} />
      <GreenLight active={state.currentLight === 'green'} countdown={state.currentLight === 'green' ? state.countdown : null} />
    </div>
  );
};

export default TrafficLight;
