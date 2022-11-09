import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition.
  // if [], run once when the row loads, and don't run again.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);
  return (
    <div className="row">
      <h2> {title}</h2>

      <div className="row__posters">
        {/* {several row posters} */}
        {movies.map(movie => (
          <img src={`${baseURL}${movie.poster_path}`} alt={movie.name} className="row__poster" />
        ))}
      </div>
    </div>
  )
}

export default Row;