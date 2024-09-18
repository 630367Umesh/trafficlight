import React, { createContext, useReducer, useEffect } from 'react';

// Initial State
const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  emergencyOverride: false,
  countdown: 10,
};
 // Ensure the context is created and exported


// Reducer
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload, countdown: action.countdown };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequested: true };
    case 'RESET_CROSSING':
      return { ...state, pedestrianRequested: false };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: true, currentLight: 'green', countdown: 10 };
    case 'RESET_EMERGENCY':
      return { ...state, emergencyOverride: false };
    case 'UPDATE_COUNTDOWN':
      return { ...state, countdown: action.payload };
    default:
      return state;
  }
};

// Context
export const TrafficLightContext = createContext();

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  useEffect(() => {
    if (!state.emergencyOverride) {
      let interval = setInterval(() => {
        dispatch({ type: 'UPDATE_COUNTDOWN', payload: state.countdown - 1 });
        if (state.countdown <= 1) {
          switch (state.currentLight) {
            case 'green':
              dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow', countdown: 3 });
              break;
            case 'yellow':
              dispatch({ type: 'CHANGE_LIGHT', payload: 'red', countdown: 7 });
              break;
            case 'red':
              if (state.pedestrianRequested) {
                setTimeout(() => {
                  dispatch({ type: 'RESET_CROSSING' });
                }, 5000);
              }
              dispatch({ type: 'CHANGE_LIGHT', payload: 'green', countdown: 10 });
              break;
            default:
              break;
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [state.currentLight, state.countdown, state.pedestrianRequested, state.emergencyOverride]);

  const requestCrossing = () => {
    if (state.currentLight !== 'red') {
      dispatch({ type: 'REQUEST_CROSSING' });
    }
  };

  const emergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  const resetEmergency = () => {
    dispatch({ type: 'RESET_EMERGENCY' });
  };

  return (
    <TrafficLightContext.Provider
      value={{ state, requestCrossing, emergencyOverride, resetEmergency }}>
      {children}
    </TrafficLightContext.Provider>
  );
};
