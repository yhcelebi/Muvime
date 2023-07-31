import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className="container-a">
            <div className="search">
                <input className="form-control" type="text" placeholder="Search for a movie, person or genre" aria-label="default input example"></input>
                <button className="search-button btn btn-danger">Search</button>
            </div>
        </div>
    );
}

export default Search;