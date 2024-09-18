import React, {useContext} from 'react';
import {TrafficLightContext} from './TrafficLightContext';

const PedestrianButton = () => {
  const { requestCrossing } = useContext(TrafficLightContext);

  return (
    <button className="pedestrian-button" onClick={requestCrossing}>
      Request Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;