import React, { useEffect, useState } from "react";
import "./Slider.css";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  genre_ids: { name: string }[];
  vote_average: number;
  release_date: string;
  poster_path: string;
}

export const Slider = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Provide the type annotation for movies
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY'
      }
    };

    axios.request(options)
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const url = movies.slice(0, 6).map((movie) => {
    return "https://image.tmdb.org/t/p/original" + movie.poster_path;
  });

  console.log(url[0]);

  return (
    <div className="slider-container">
      <div className="row align-items-center cards">
      {movies.slice(0, 6).map((movie, index) => (
          // Add a conditional check for poster_path before rendering the MovieCard
          // This will prevent rendering the MovieCard if poster_path is not available
          // The nullish coalescing operator ?? ensures that an empty string is used as the fallback
          movie.poster_path && (
            <MovieCard
              key={movie.id}
              title={movie.title}
              genre={movie.genre_ids[0]?.name + "/" + movie.genre_ids[1]?.name}
              rate={movie.vote_average}
              date={movie.release_date}
              style={{
                backgroundImage: `url(${url[index] ?? ''})`
              }}
              className="col-1"
            />
          )
        ))}
      </div>
    </div>
  );
};
