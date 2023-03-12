import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Row.css";

function Row({title, fetchUrl}) {

const base_url = "https://image.tmdb.org/t/p/original/";
const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        const data = response.data;
        if (data && data.results) {
          setMovies(
            data.results
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies)
  return (
    <div className='Row'>

<h2>{title}</h2>

<div className="row_posters">
{movies.map(movie=>(


<img className="row_poster" src={`${base_url}${movie?.poster_path}`} />

))}

    </div>
    </div>
  )
}

export default Row