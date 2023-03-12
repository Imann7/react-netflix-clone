import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const data = response.data;
        if (data && data.results) {
          setMovie(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(movie);

  const shorten = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_content">
        <h1 className="title">{movie?.name}</h1>

        <div className="banner-button">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>

        <h3 className="description">
          {shorten(
          movie?.overview,
            200
          )}
        </h3>
      </div>

      <div className="fade_banner" />
    </header>
  );
}

export default Banner;
