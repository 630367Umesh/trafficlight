// EmergencyButton.js
import React, { useContext } from 'react'; // Import useContext from React
import { TrafficLightContext } from './TrafficLightContext'; // Ensure correct context import

const EmergencyButton = () => {
  const { emergencyOverride, resetEmergency } = useContext(TrafficLightContext); // Correct use of useContext

  return (
    <div>
      <button className="emergency-button" onClick={emergencyOverride}>
        Emergency Override
      </button>
      <button className="emergency-button reset" onClick={resetEmergency}>
        Reset Emergency
      </button>
    </div>
  );
};

export default EmergencyButton;
