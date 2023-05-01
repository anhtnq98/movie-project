import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetail.css";

function TvSeriesDetail() {
  const { id } = useParams();
  const [tv, setTV] = useState([]);

  useEffect(() => {
    const loadTV = async () => {
      const result = await axios.get(`http://localhost:5000/tv-series/${id}`);
      setTV(result.data);
      console.log(result.data);
    };
    loadTV();
  }, [id]);

  return (
    <>
      <div>
        <div className="mv-detail-container">
          <div className="mv-detail-img">
            <img src={tv.poster} alt="" width={"300px"} />
          </div>
          <div className="mv-detail-text">
            <p className="mv-detail-title">{tv.title}</p>
            <p className="mv-detail-star">
              <img src="/img/star.gif" width={"30px"} alt="" /> {tv.voteAverage}
            </p>
            <div className="mv-detail-more">
              <p>
                <span>Năm:</span> {tv.year}
              </p>
              <p>
                <span>Quốc gia:</span> {tv.country}
              </p>
              <p>
                <span>Thể loại:</span> {tv.genreOne} - {tv.genreTwo} -{" "}
                {tv.genreThree}
              </p>
            </div>
            <div className="mv-detail-more">
              <p>
                <span>Số Tập: </span> {tv.episodes}
              </p>
              <p>
                <span>Thời lượng: </span> {tv.runtime}
              </p>
              <p>
                <span>Tình Trạng: </span> {tv.complete}
              </p>
            </div>
            <hr />
            <div className="mv-detail-nd">Nội dung</div>
            <div className="mv-detail-detail">{tv.plot}</div>
            <hr />
            <div className="mv-detail-play">
              <div className="trailer">
                Xem Trailer <i className="fa-sharp fa-solid fa-circle-play"></i>
              </div>
              <div>
                <img src="/img/play.png" width={"50px"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TvSeriesDetail;
