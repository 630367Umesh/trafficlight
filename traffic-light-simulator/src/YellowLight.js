import React from 'react';

const YellowLight = ({ active, countdown }) => {
  return (
    <div className={`light yellow ${active ? 'on' : ''}`}>
      {countdown && <span>{countdown}</span>}
    </div>
  );
};
export default YellowLight;