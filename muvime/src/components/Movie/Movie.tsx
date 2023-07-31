import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Movie.css";
import dayjs from "dayjs";

interface Movie {
  id: number;
  title: string;
  genre_ids: { name: string }[];
  vote_average: number;
  release_date: string;
  poster_path: string;
}

const ACCCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

const Movie = (props: any) => {
  const [movie, setMovie] = useState<Movie | null>(null); // Change the initial state to null
  const [genres, setGenres] = useState<any[]>([]);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Access the movie data from the location state
        const movieData: Movie | undefined = location.state?.movieData;
        if (movieData) {
          setMovie(movieData);
        } else {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${ACCCESS_TOKEN}`,
              },
            }
          );
          setMovie(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId, location.state]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const responseGenre = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + ACCCESS_TOKEN,
            },
          }
        );
        const genres = responseGenre.data.genres;
        setGenres(genres);
      } catch (errorGenre: any) {
        console.error(errorGenre);
      }
    };
    fetchGenres();
  }, []);

  if (!movie) {
    return <div>Loading...</div>; // Add a loading state while waiting for the movie data
  }

  return (
    <div>
      <div className="container-fluid movie-header ">
        <div className="landing container">
          <div className="row">
            <div className="col-3">
              <img
                src={"https://image.tmdb.org/t/p/original/"+ movie.poster_path}
                alt="poster"
                className="poster"
              />
              <div className="row justify-content-center">
                <div className="col-6">
                  <button className="btn btn-danger align-self-center watch-now">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info">
                <div className="row">
                  <div className="col d-flex">
                    <h1>{movie.title}</h1>
                    <h1 className="release-date">{"(" + dayjs(movie.release_date).format("YYYY") + ")"}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex">
                    <p>age restriction</p>
                    <p>{movie.release_date}</p>
                    <p>{}</p>
                    <p>runtime</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h3>Overview</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo laudantium voluptas corporis non laborum ducimus,
                    animi vel soluta beatae accusamus minima, sed amet eaque
                    fugit? Nesciunt obcaecati ab eaque officiis!
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <div>director</div>
                    <div>name</div>
                  </div>
                  <div className="col">
                    <div>writer</div>
                    <div>name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
