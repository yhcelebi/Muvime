import React from "react";
import "./Header.css";
import headerBackground from "../images/background.png";

export const Header = () => {
    return (
        <div className="header-main container-fluid ">
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                <span className="input-group-text" id="inputGroup-sizing-default"><button className="btn search-button">Search</button></span>
            </div> 
        </div>
    );
}