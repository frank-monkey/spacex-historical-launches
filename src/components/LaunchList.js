import React from 'react';
import LaunchEntry from './LaunchEntry';
import './LaunchList.css';

const LaunchList = ({ launches }) => {
  return (
    <div className="launch-list">
      {launches.map((launch) => (
        <LaunchEntry key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchList;