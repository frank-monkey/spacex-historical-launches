import React, {useState} from 'react';
import './LaunchEntry.css';
import default_patch from '../assets/spacex_logo.webp';

const LaunchEntry= ({ launch }) => {
  const [showDetails, setShowDetails] = useState(false);

  const {
    rocket: { rocket_name },
    launch_site: { site_name },
    launch_date_utc,
    details,
    success,
    links: { video_link, wikipedia },
    mission_name
  } = launch;

  const formattedDate = new Date(launch_date_utc).toLocaleDateString();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={toggleDetails}>
      <h2>{mission_name}</h2>
      <p>Rocket Name: {rocket_name}</p>
      <p>Launch Site: {site_name}</p>
      <p>Date of Launch: {formattedDate}</p>
      <img
        src={launch.links.mission_patch_small || default_patch}
        alt="Mission Patch"
        width={200}
        height={200}
      />
      {showDetails && (
        <div>
          {<p>Details: {details || "No details available."}</p>}
          <p>Success: {success ? 'Yes' : 'No'}</p>
          {video_link && (
            <p>
              <a href={video_link} target="_blank" rel="noopener noreferrer" className="link-button">
                Watch Launch on YouTube
              </a>
            </p>
          )}
          {wikipedia && 
            (<p>
              <a href={wikipedia} target="_blank" rel="noopener noreferrer" className="link-button">
                Read on Wikipedia
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchEntry;