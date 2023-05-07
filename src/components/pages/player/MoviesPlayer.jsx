import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fade from "react-reveal/Fade";
import "./Player.css";
// import { NavLink } from "react-router-dom";

function MoviesPlayer() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const loadMovie = async () => {
      const result = await axios.get(`http://localhost:5000/movies/${id}`);
      setMovie(result.data);
    };
    loadMovie();
  }, [id]);

  return (
    <div>
      <Fade left>
        <div className="video-player-container">
          <div className="video-player-title">{movie.title}</div>
          <video src={movie.video} controls></video>
        </div>
      </Fade>
    </div>
  );
}

export default MoviesPlayer;
