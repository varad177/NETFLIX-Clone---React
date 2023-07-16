import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

const Banner = () => {

    const [movie , setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            return request;
          }
    
          fetchData()
    },[])

 

  function trancate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_discription">
          {trancate(
            `${movie.overview}` , 150
          )}
        </h1>
      </div>
      <div className="banner--fadebutton" />
    </header>
  );
};

export default Banner;
