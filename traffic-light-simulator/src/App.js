import React from 'react';
import { TrafficLightProvider } from './TrafficLightContext';
import TrafficLight from './TrafficLight';
import PedestrianButton from './PedestrianButton';
import EmergencyButton from './EmergencyButton';
import './App.css';
import Countdown from './Countdown';


const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <TrafficLight />
        <PedestrianButton />
        <EmergencyButton />
        <Countdown />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
