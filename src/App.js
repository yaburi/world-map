import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from './Components/MapChart';
import Clock from './Components/Clock';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  return (
    <div>
      <h1>Time around the World</h1>
      <Clock />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;