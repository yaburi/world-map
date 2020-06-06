import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./Components/MapChart";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <h1>World Map</h1>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
