import React from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onMouseEnter, onMouseLeave,onMouseClick }) => {
  return (
    <div id = "dropdown"
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}>
      {options.map((option,index) => (
        <p 
        key={index}
        onClick={()=> onMouseClick(option)}
        >{option}</p>
      ))}
    </div>
  );
};

export default Dropdown;
