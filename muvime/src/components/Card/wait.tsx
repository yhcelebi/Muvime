import React from "react";
import "./MovieCard.css";
import Image from "./Image/image 4.png";

interface MovieCardProps {
  className: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ className }) => {
  return (
    <div className={`movie-card ${className}`}>
      <img src={Image} className="image-4" />
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
