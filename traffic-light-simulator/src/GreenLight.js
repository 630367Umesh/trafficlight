import React from 'react';

const GreenLight = ({ active, countdown }) => {
  return (
    <div className={`light green ${active ? 'on' : ''}`}>
      {countdown && <span>{countdown}</span>}
    </div>
  );
};

export default GreenLight;