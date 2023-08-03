import { useEffect, useState } from "react";
import "./Search.css";
import { Header } from "../Header/Header";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
  poster_path: string | null;
}

export const ACCCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

const num: number = 12;
const itemsPerPage: number = 20; // Adjust this value according to your API's pagination settings

const Search = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const location = useLocation(); // Get the location object from React Router
  const searchResults = location.state?.searchResults || [];
  const navigate = useNavigate();
  const [runtimes, setRuntimes] = useState<number[]>([]);
  const { searchTerms, page = "1" } = useParams<{ searchTerms: string; page?: string }>();
  const currentPage = parseInt(page, 10);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const responseGenre: AxiosResponse<{ genres: Genre[] }> = await axios.get(
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

  const url = (posterPath: string | null) => {
    return posterPath
      ? "https://image.tmdb.org/t/p/original" + posterPath
      : "https://via.placeholder.com/200x300?text=No+Image";
  };

  const runtimeFinder = searchResults.map((movie: Movie) => {
    return movie.id;
  });

  useEffect(() => {
    const fetchRuntimeForMovies = async () => {
      try {
        if (runtimeFinder.length === 0) return;

        const runtimeRequests = runtimeFinder.map(async (id: number) => {
          const responseRuntime: AxiosResponse<{ runtime: number }> = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
              headers: {
                accept: "application/json",
                Authorization: "Bearer " + ACCCESS_TOKEN,
              },
            }
          );

          console.log("Movie ID:", id);
          console.log("Response Runtime Data:", responseRuntime.data);
          return responseRuntime.data.runtime;
        });

        const runtimes = await Promise.all(runtimeRequests);
        setRuntimes(runtimes);
      } catch (errorRuntime: any) {
        console.error(errorRuntime);
      }
    };
    fetchRuntimeForMovies();
  }, [runtimeFinder]);

  const movieGenres = searchResults.map((movie: Movie, index: number) => {
    return movie.genre_ids.map((genreId: number) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });
  });

  const handleMovieCardClick = (movieId: number) => {
    // Use the navigate function to navigate to the movie details page
    navigate(`/movies/${movieId}`);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  // Filter the movies for the current page
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <div className="container search-wrap">
        <div className="row align-items-center">
          <div className="col-11">
            <h2 className="search-results">Search Results</h2>
          </div>
          <div className="col">
            <p className="records">{searchResults.length} Records</p>
          </div>
        </div>
        <div className="row">
          {paginatedResults.map((movie: Movie, index: number) => {
            return (
              <div className="col-3" key={movie.id}>
                {/* Use the onClick event to handle the card click */}
                <div className="link" onClick={() => handleMovieCardClick(movie.id)}>
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movieGenres[index].join("/")}
                    rate={movie.vote_average}
                    date={`${
                      typeof runtimes[index] === "number" && !isNaN(runtimes[index])
                        ? `${Math.floor(runtimes[index] / 60)}h ${
                            (runtimes[index] & 60) === 0 ? "" : (runtimes[index] & 60) + "m"
                          }`
                        : "Unknown"
                    } / ` + dayjs(movie.release_date).format("YYYY")}
                    style={{
                      backgroundImage: `url(${url(movie.poster_path)})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination Buttons */}
        <div className="pagination-container row container">
          {currentPage > 1 && (
            <button className="pagination-button btn-primary" onClick={() => navigate(`/search/${searchTerms}?page=${currentPage - 1}`)}>
              Previous
            </button>
          )}
          {currentPage < totalPages && (
            <button className="pagination-button btn-primary" onClick={() => navigate(`/search/${searchTerms}?page=${currentPage + 1}`)}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
