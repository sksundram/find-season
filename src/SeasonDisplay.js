import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  // April to September
  if (month > 2 && month < 9) {
    // Northern hemisphere
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // Jan to March and Oct to Dec
    // Northern hemisphere
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer: {
    text: "It's so hot!",
    iconName: 'sun'
  },
  winter: {
    text: "It's so chilly!",
    iconName: 'snowflake'
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left icon massive`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon-right icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
