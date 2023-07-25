import React, { useEffect, useState } from "react";
import "./Slider.css";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  genres: { name: string }[];
  vote_average: number;
  release_date: string;
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
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="slider-container">
      <div className="row title">
        {/* <h2 className="popular">What's Popular</h2>
        <a href="" className="more">More...</a> */}
      </div>
      <div className="row align-items-center cards">
        <MovieCard
            key={movies[0].id}
            title={movies[0].title}
            genre={movies[0].genres[0].name + "/" + movies[0].genres[1].name} // Fixed the typo here
            rate={movies[0].vote_average}
            date={movies[0].release_date}
            className="col-1"
        />
        <MovieCard
            key={movies[1].id}
            title={movies[1].title}
            genre={movies[1].genres[0].name + "/" + movies[0].genres[1].name} // Fixed the typo here
            rate={movies[1].vote_average}
            date={movies[1].release_date}
            className="col-1"
        />
        <MovieCard
            key={movies[2].id}
            title={movies[2].title}
            genre={movies[2].genres[0].name + "/" + movies[0].genres[1].name} // Fixed the typo here
            rate={movies[2].vote_average}
            date={movies[2].release_date}
            className="col-1"
        />
        <MovieCard
            key={movies[3].id}
            title={movies[3].title}
            genre={movies[3].genres[0].name + "/" + movies[0].genres[1].name} // Fixed the typo here
            rate={movies[3].vote_average}
            date={movies[3].release_date}
            className="col-1"
        />
        <MovieCard
            key={movies[4].id}
            title={movies[4].title}
            genre={movies[4].genres[0].name + "/" + movies[0].genres[1].name} // Fixed the typo here
            rate={movies[4].vote_average}
            date={movies[4].release_date}
            className="col-1"
        />
      </div>
    </div>
  );
};
