import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  const options = ["Yes", "Probably not"];
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const handleButtonHover = () => {
    setVisible(true);
  };

  const handleButtonLeave = () => {
    setVisible(false);
  };

  const handleDropdownHover = () => {
    setVisible(true);
  };

  const handleDropdownLeave = () => {
    setVisible(false);
  };

  const handleDropdownClick = (option) => {
    setSelected(option);
    setVisible(false);
  };

  return (
    <div id="app">
      <h1>Should you use a dropdown?</h1>
      <h2>{selected}</h2>
      <button onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
        Select
      </button>
      {visible && (
        <Dropdown
          options={options}
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownLeave}
          onMouseClick={handleDropdownClick}
        />
      )}
    </div>
  );
}

export default App;
