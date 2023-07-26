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

const ACCCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

export const Slider = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Provide the type annotation for movies

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCCESS_TOKEN}`
      }
    };

    axios.request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const url = movies.slice(0, 6).map((movie) => {
    return "https://image.tmdb.org/t/p/original" + movie.poster_path;
  });

  const genreFinder = async (genreId: any) => {
    try {
      const responseGenre = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCCESS_TOKEN}`
        }
      });
  
      const genre = responseGenre.data.genres.find((genre: { id: any; }) => genre.id === genreId);
      if (genre) {
        return genre.name;
      } else {
        return " ";
      }
    } catch (errorGenre: any) {
      console.error(errorGenre);
      return " ";
    }
  }
  
  return (
    <div className="slider-container">
      <div className="slider-title flex-row d-flex align-items-center justify-content-between">
        <h2 className="popular-title">What's Popular</h2>
        <a className="more justify-content-end" href="#">More</a>
      </div>
      <div className="row align-items-center cards">
      {movies.slice(0, 6).map((movie, index) => (
          movie.poster_path && (
            <MovieCard
              key={movie.id}
              title={movie.title}
              genre={genreFinder(movie.genre_ids[0]) + "/" + genreFinder(movie.genre_ids[1])}
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
