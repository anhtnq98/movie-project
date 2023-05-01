import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewMovieSlider.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function NewMovieSlider() {
  const [newHotUpdate, setNewHotUpdate] = useState([]);
  newHotUpdate.sort((a, b) =>
    a.updateTime === b.updateTime ? 0 : a.updateTime > b.updateTime ? -1 : 1
  );

  const loadHotUpdate = async () => {
    const result = await axios.get("http://localhost:5000/movies");
    setNewHotUpdate(result.data);
  };

  useEffect(() => {
    loadHotUpdate();
  }, []);

  return (
    <div>
      <Fade bottom>
        <div className="d-block-title">
          <img src="./img/new.gif" alt="" width={"70px"} /> Phim Lẻ Mới Cập Nhật
        </div>
        <Carousel>
          <Carousel.Item>
            <div className="d-block-container">
              {newHotUpdate.slice(0, 3).map((listHot, listHotID) => (
                <div
                  className="d-block-new"
                  key={listHotID}
                  title={listHot.title}
                >
                  <Link to={`/movies/${listHot.id}/#`}>
                    <div className="d-block-img">
                      <img
                        src={listHot.poster}
                        width={"150px"}
                        height={"210px"}
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="d-block-name">{listHot.title}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block-container">
              {newHotUpdate.slice(3, 6).map((listHot, listHotID) => (
                <div
                  className="d-block-new"
                  key={listHotID}
                  title={listHot.title}
                >
                  <div className="d-block-img">
                    <img
                      src={listHot.poster}
                      width={"150px"}
                      height={"210px"}
                      alt=""
                    />
                  </div>
                  <div className="d-block-name">{listHot.title}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block-container">
              {newHotUpdate.slice(6, 9).map((listHot, listHotID) => (
                <div
                  className="d-block-new"
                  key={listHotID}
                  title={listHot.title}
                >
                  <div className="d-block-img">
                    <img
                      src={listHot.poster}
                      width={"150px"}
                      height={"210px"}
                      alt=""
                    />
                  </div>
                  <div className="d-block-name">{listHot.title}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </Fade>
    </div>
  );
}

export default NewMovieSlider;
