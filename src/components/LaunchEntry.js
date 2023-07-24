import React, {useState} from 'react';

const LaunchEntry= ({ launch }) => {
  const [showDetails, setShowDetails] = useState(false);

  const {
    rocket: { rocket_name },
    launch_site: { site_name },
    launch_date_utc,
    details,
    success,
    links: { video_link },
  } = launch;

  const formattedDate = new Date(launch_date_utc).toLocaleDateString();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={toggleDetails}>
      <p>Rocket Name: {rocket_name}</p>
      <p>Launch Site: {site_name}</p>
      <p>Date of Launch: {formattedDate}</p>
      <img
        src={launch.links.mission_patch_small}
        alt="Mission Patch"
        width={200}
        height={200}
      />
      {showDetails && (
        <div>
          {details && <p>Details: {details}</p>}
          <p>Success: {success ? 'Yes' : 'No'}</p>
          {video_link && (
            <p>
              <a href={video_link} target="_blank" rel="noopener noreferrer">
                Watch Launch on YouTube
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchEntry;