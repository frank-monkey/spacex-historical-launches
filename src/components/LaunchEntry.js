import React from 'react';

const LaunchEntry= ({ launch }) => {
  const {
    rocket: { rocket_name },
    launch_site: { site_name },
    launch_date_utc,
  } = launch;

  const formattedDate = new Date(launch_date_utc).toLocaleDateString();

  return (
    <div>
      <p>Rocket Name: {rocket_name}</p>
      <p>Launch Site: {site_name}</p>
      <p>Date of Launch: {formattedDate}</p>
      <img
        src={launch.links.mission_patch_small}
        alt="Mission Patch"
        width={200}
        height={200}
      />
    </div>
  );
};

export default LaunchEntry;