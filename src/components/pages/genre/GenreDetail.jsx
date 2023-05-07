import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Sidebar from "../../layout/sidebar/Sidebar";
import MyCarousel from "../home/MyCarousel";

function GenreDetail() {
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [Tvs, setTvs] = useState([]);
  const listMovies = movies.filter(
    (e) =>
      e.genreOne === genres.name ||
      e.genreTwo === genres.name ||
      e.genreThree === genres.name
  );
  const listTvs = Tvs.filter(
    (e) =>
      e.genreOne === genres.name ||
      e.genreTwo === genres.name ||
      e.genreThree === genres.name
  );

  useEffect(() => {
    const loadGenre = async () => {
      const result = await axios.get(`http://localhost:5000/genres/${id}`);
      setGenres(result.data);
    };
    loadGenre();
  }, [id]);

  const loadMovies = async () => {
    const resultMovie = await axios.get("http://localhost:5000/movies");
    setMovies(resultMovie.data);
  };

  const loadTVs = async () => {
    const resultTv = await axios.get("http://localhost:5000/tv-series");
    setTvs(resultTv.data);
  };

  useEffect(() => {
    loadMovies();
    loadTVs();
  }, []);

  return (
    <>
      <Fade left cascade>
        <div className="genre-detail-title">
          <i className={genres.icon}></i> {genres.name}
        </div>
      </Fade>
      <div className="first-container">
        <div className="main">
          <MyCarousel />
          <div className="years-detail-container">
            <Fade top>
              <div style={{ fontSize: "25px" }} className="hot-title">
                <img src="./img/hot.gif" alt="" width={"50px"} />
                Phim Lẻ {genres.name}
              </div>
              <div className="hot-title-container">
                {listMovies.map((data, dataID) => (
                  <div key={dataID} className="movie-card" title={data.title}>
                    <Link to={`/movies/${data.id}/#`}>
                      <div className="movie-card-img">
                        <img
                          src={data.poster}
                          alt=""
                          width={"160px"}
                          height={"225px"}
                        />
                      </div>
                    </Link>
                    <div className="movie-card-detail">
                      <p className="movie-card-title-year">{data.title}</p>
                      <p className="movie-card-year">{data.year}</p>{" "}
                      <p className="movie-card-rating">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/fir-upload-img-ft02.appspot.com/o/for-all%2Fstar.gif?alt=media&token=fbc577c0-4163-4a5a-af32-c1f1b35ad417"
                          width={"18px"}
                          alt=""
                        />{" "}
                        {data.voteAverage}
                        <span className="detail">
                          <i className="fa-solid fa-circle-info"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
          <div className="years-detail-container">
            <Fade bottom>
              <div style={{ fontSize: "25px" }} className="hot-title">
                <img src="./img/hot.gif" alt="" width={"50px"} />
                Phim Bộ {genres.name}
              </div>
              <div className="hot-title-container">
                {listTvs.map((data, dataID) => (
                  <div key={dataID} className="movie-card" title={data.title}>
                    <Link to={`/tv-series/${data.id}/#`}>
                      <div className="movie-card-img">
                        <img
                          src={data.poster}
                          alt=""
                          width={"160px"}
                          height={"225px"}
                        />
                      </div>
                    </Link>
                    <div className="movie-card-detail">
                      <p className="movie-card-title-year">{data.title}</p>
                      <p className="movie-card-year">{data.year}</p>{" "}
                      <p className="movie-card-rating">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/fir-upload-img-ft02.appspot.com/o/for-all%2Fstar.gif?alt=media&token=fbc577c0-4163-4a5a-af32-c1f1b35ad417"
                          width={"18px"}
                          alt=""
                        />{" "}
                        {data.voteAverage}
                        <span className="detail">
                          <i className="fa-solid fa-circle-info"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
        <div className="side-bar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default GenreDetail;
