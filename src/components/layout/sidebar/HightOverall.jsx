import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function HightOverall() {
  const [hightOverall, setHightOverall] = useState([]);
  //Sắp xếp theo đánh giá
  hightOverall.sort((a, b) =>
    a.voteAverage === b.voteAverage ? 0 : a.voteAverage > b.voteAverage ? -1 : 1
  );

  const loadHightOverall = async () => {
    const result = await axios.get("http://localhost:5000/tv-series");
    setHightOverall(result.data);
  };

  useEffect(() => {
    loadHightOverall();
  }, []);

  return (
    <div className="ho-container">
      <Fade top>
        <p className="ho-title">
          <i
            style={{ color: "orange" }}
            className="fa-sharp fa-solid fa-star"
          ></i>{" "}
          Phim Bộ Được Đánh Giá Cao
        </p>
        <div className="ho-img">
          <img src="./img/ho.jpg" width={"100%"} alt="" />
        </div>
        {hightOverall.slice(0, 10).map((data, id) => (
          <div key={id}>
            <Link className="nav-link active" to={`/tv-series/${data.id}/#`}>
              <div className="movie-card-container">
                <div>
                  <img
                    src={data.poster}
                    width={"78px"}
                    height={"115px"}
                    alt=""
                  />
                </div>
                <div>
                  <p className="ho-movie-name">{data.title}</p>
                  <p className="ho-overal">
                    <i className="fa-sharp fa-solid fa-star ho-overal"></i>{" "}
                    {data.voteAverage}
                    <span className="ho-year">
                      {" "}
                      ({data.episodes} - {data.complete})
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default HightOverall;
