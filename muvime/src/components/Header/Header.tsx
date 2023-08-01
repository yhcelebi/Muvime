import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";
import { ACCCESS_TOKEN } from "../Slider/Slider";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const fetchMoviesBySearchTerm = async (queryReq: string) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie?query=" + queryReq,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY",
      },
    };

    axios
      .request(options)
      .then(function (response: { data: any; }) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMoviesBySearchTerm(searchTerm);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-a">
      <div className="search">
        <input
          className="form-control"
          type="text"
          placeholder="Search for a movie, person or genre"
          aria-label="default input example"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button btn btn-danger">Search</button>
      </div>
    </div>
  );
};
