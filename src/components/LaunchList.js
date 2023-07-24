import React from 'react';
import LaunchEntry from './LaunchEntry';

const LaunchList = ({ launches }) => {
  return (
    <div>

      {launches.map((launch) => (
        <LaunchEntry key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchList;