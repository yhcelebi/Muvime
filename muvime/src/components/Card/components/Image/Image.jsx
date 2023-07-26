import React from "react";
import "./style.css";

export const Image = (props) => {
  return <div 
  className={`image ${props.className}`}
  style={props.style}
   />;
};
