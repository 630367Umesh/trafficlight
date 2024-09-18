// Countdown.js
// Countdown.js
import React, { useContext, useState, useEffect } from 'react'; // Correctly importing React hooks
import { TrafficLightContext } from './TrafficLightContext'; // Ensure the context is properly imported

const Countdown = () => {
  const { state } = useContext(TrafficLightContext); // Using useContext correctly
  const [countdown, setCountdown] = useState(state.countdown); // useState hook

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(state.countdown);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval
  }, [state.countdown]); // useEffect hook with dependency

  return <div>{countdown}</div>;
};

export default Countdown;
