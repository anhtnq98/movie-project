import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Sidebar from "../../layout/sidebar/Sidebar";
import MyCarousel from "../home/MyCarousel";

function YearsDetail() {
  const { id } = useParams();
  const [years, setYears] = useState([]);
  const [movies, setMovies] = useState([]);
  const [Tvs, setTvs] = useState([]);
  const listYears = movies.filter((e) => e.year === years.year);
  const listTvs = Tvs.filter((e) => e.year === years.year);

  useEffect(() => {
    const loadYear = async () => {
      const result = await axios.get(`http://localhost:5000/years/${id}`);
      setYears(result.data);
      console.log(result.data);
    };
    loadYear();
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
      <Fade left>
        <div className="genre-detail-title">Phim Năm {years.year}</div>
      </Fade>
      <div className="first-container">
        <div className="main">
          <MyCarousel />
          <div className="years-detail-container">
            <div>
              <Fade top>
                <div style={{ fontSize: "25px" }} className="hot-title">
                  <img src="./img/hot.gif" alt="" width={"50px"} />
                  Phim Lẻ Năm {years.year}
                </div>
                <div className="hot-title-container">
                  {listYears.map((data, dataID) => (
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
                          <img src="./img/star.gif" width={"18px"} alt="" />{" "}
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
          <div className="years-detail-container">
            <Fade top>
              <div style={{ fontSize: "25px" }} className="hot-title">
                <img src="./img/hot.gif" alt="" width={"50px"} />
                Phim Bộ Năm {years.year}
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
                        <img src="./img/star.gif" width={"18px"} alt="" />{" "}
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

export default YearsDetail;
