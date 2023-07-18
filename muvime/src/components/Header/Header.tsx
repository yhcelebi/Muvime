import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <div className="container">
            <img className="C:\Users\yusuf.celebi\Desktop\Muvime\muvime\src\images\background.png" src="" alt="" />
            <div className="search ">
                <input className="form-control" type="text" placeholder="Search for a movie, person or genre" aria-label="default input example"></input>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}