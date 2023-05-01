import React, { useEffect, useState } from "react";
import "./HotMovie.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function HotMovie() {
  const [hotMovie, setHotMovie] = useState([]);
  // List theo năm 2023
  const listHot = hotMovie.filter((e) => e.year === 2023);
  //Sắp xếp theo đánh giá
  listHot.sort((a, b) =>
    a.voteAverage === b.voteAverage ? 0 : a.voteAverage > b.voteAverage ? -1 : 1
  );

  const loadHotMovie = async () => {
    const result = await axios.get("http://localhost:5000/movies");
    setHotMovie(result.data);
  };

  useEffect(() => {
    loadHotMovie();
  }, []);

  return (
    <>
      <Fade left>
        <div className="hot-title">
          <img src="./img/hot.gif" alt="" width={"50px"} />
          Phim Lẻ Hot 2023
        </div>
        <div className="hot-title-container">
          {listHot.map((data, dataID) => (
            <div className="movie-card" title={data.title} key={dataID}>
              <Link to={`/movies/${data.id}/#`}>
                <div className="movie-card-img">
                  <img
                    src={data.poster}
                    alt=""
                    width={"160px"}
                    height={"245px"}
                  />
                </div>
              </Link>
              <div className="movie-card-detail">
                <p className="movie-card-title">{data.title}</p>
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
    </>
  );
}

export default HotMovie;
