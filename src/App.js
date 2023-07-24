import React, { useState, useEffect } from 'react';
import './App.css';
import LaunchList from './components/LaunchList';

function App() {
  const [launches, setLaunches] = useState([]);

  const fetchLaunches = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await response.json();
    setLaunches(data);
  };

  useEffect(() => {
    fetchLaunches();
  }, []);
  return (
      <div className="app-container">
        <h1>Historical SpaceX Launches</h1>
        <p>There were a total of {launches.length} launches 🚀</p>
        <LaunchList launches={launches} />
      </div>
  );
}

export default App;
