import React from "react";
import "./Slider.css";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";

export const Slider = () => {
    return (
        <div className="slider-container">
            <div className="row title">
{/*                 <h2 className="popular">What's Popular</h2>
                <a href="" className="more">More...</a> */}
            </div>
            <div className="row align-items-center cards">
                <MovieCard className="col-1"></MovieCard>
                <MovieCard className="col-1"></MovieCard>
                <MovieCard className="col-1"></MovieCard>
                <MovieCard className="col-1"></MovieCard>
                <MovieCard className="col-1"></MovieCard>
            </div>
        </div>
    );
}