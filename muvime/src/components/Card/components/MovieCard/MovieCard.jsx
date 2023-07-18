/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Image } from "../Image/Image.jsx";
import "./style.css";

export const MovieCard = ({ className }) => {
  return (
    <div className={`movie-card ${className}`}>
      <Image className="image-4" />
      <div className="seperator" />
      <div className="title">The Tomorrow War</div>
      <div className="div" />
      <div className="genre">Action, Science Fiction</div>
      <div className="seperator-2" />
      <div className="rating">
        <div className="time-year">2h 23m / 2021</div>
        <div className="rate">
          <div className="overlap-group">
            <div className="element">86.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};
