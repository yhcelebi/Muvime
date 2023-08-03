import { useState, useEffect, useRef } from "react";
import "./Header.css";
import axios from "axios";
import { ACCCESS_TOKEN } from "../Slider/Slider";
import { useNavigate, useParams } from "react-router-dom";

let queryReqSaved: string = "";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const isFirstRenderRef = useRef(true);
  const navigate = useNavigate();
  const { searchTerms } = useParams();

  const fetchMoviesBySearchTerm = async (queryReq: string) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie?query=" + queryReq,
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + ACCCESS_TOKEN,
      },
    };

    try {
      const response = await axios.request(options);
      queryReqSaved = queryReq;
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (isFirstRenderRef.current) {
      // Skip the API call on the first render
      isFirstRenderRef.current = false;
    } else {
      // Perform the API call on subsequent renders
      const timer = setTimeout(() => {
        fetchMoviesBySearchTerm(searchTerm);
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchTerm]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      // When Enter key is pressed, change the route
      handleSearch();
    }
  };

  const handleSearch = async () => {
    // Do the search or any other actions here
    // For now, just change the route to "/search" with the search results data as state
    const response = await fetchMoviesBySearchTerm(searchTerm);
    const searchResults = response?.results || []; // Access 'results' directly from the response
    navigate(`/search/${queryReqSaved}`, { state: { searchResults } });
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
          onKeyPress={handleKeyPress}
        />
        <button className="search-button btn btn-danger" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
