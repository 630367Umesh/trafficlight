import React from 'react';

const RedLight = ({ active, countdown }) => {
  return (
    <div className={`light red ${active ? 'on' : ''}`}>
      {countdown && <span>{countdown}</span>}
    </div>
  );
};

export default RedLight;
