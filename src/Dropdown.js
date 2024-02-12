import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onMouseEnter, onMouseLeave, onMouseClick,top }) => {
  return (
    <div
      id="dropdown"
      style={{
        position: "absolute",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        top: top,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "150px",
        zIndex: 1,
        cursor: "pointer",
        marginTop: "10px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {options.map((option, index) => (
        <p
          key={index}
          onClick={() => onMouseClick(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;
