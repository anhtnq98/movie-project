import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetail.css";
import Fade from "react-reveal/Fade";

function MovieDetail() {
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
    <>
      <div>
        <Fade left>
          <div className="mv-detail-container">
            <div className="mv-detail-img">
              <img src={movie.poster} alt="" width={"300px"} />
            </div>
            <div className="mv-detail-text">
              <p className="mv-detail-title">{movie.title}</p>
              <p className="mv-detail-star">
                <img src="/img/star.gif" width={"30px"} alt="" />{" "}
                {movie.voteAverage}
              </p>
              <div className="mv-detail-more">
                <p>
                  <span>Năm:</span> {movie.year}
                </p>
                <p>
                  <span>Quốc gia:</span> {movie.country}
                </p>
                <p>
                  <span>Thể loại:</span> {movie.genreOne} - {movie.genreTwo} -{" "}
                  {movie.genreThree}
                </p>
              </div>
              <div className="mv-detail-more">
                <p>
                  <span>Thời lượng: </span> {movie.runtime}
                </p>
              </div>
              <hr />
              <div className="mv-detail-nd">Nội dung</div>
              <div className="mv-detail-detail">{movie.plot}</div>
              <div className="mv-detail-play">
                <div className="trailer">
                  Xem Trailer{" "}
                  <i className="fa-sharp fa-solid fa-circle-play"></i>
                </div>
                <div>
                  <img src="/img/play.png" width={"50px"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="trailer-container">
          <Fade top>
            <p className="trailer-title">{movie.title} Trailer</p>
            <div className="trailer-video">
              <iframe
                width={"854"}
                height={"480"}
                src={`https://www.youtube.com/embed/${movie.trailer}`}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Fade>
        </div>
        <div className="comment-container">
          <p className="comment-title">Bình Luận</p>
          <div className="comment-input-container">
            <div className="comment-avatar">
              <img src="/img/avatar1.jpg" width={"90px"} alt="" />
            </div>
            <textarea
              placeholder="Bình luận tại đây . . . "
              name=""
              id=""
              cols="70"
              rows="3"
            ></textarea>
          </div>
          <div className="comment-button">
            <p>Đăng nhập để bình luận</p>
          </div>
          <div className="list-comment">
            <div className="comment-avatars">
              <img src="/img/avatar1.jpg" width={"75px"} alt="" />
            </div>
            <div className="comment-text">
              <div className="comment-text-first">
                <p className="comment-user">Tên</p>
                <div>Like lolike</div>
              </div>
              <p>
                grehehethtsdffffffffffffffffffffffffffffffdfgdfhdf hdfhdfhdh
                dhdghd hdghg hgdh dghdhdh
                gfffffffffffffffffffffffffffffffffffffff
              </p>
            </div>
          </div>
        </div>
        <div>Có thể bạn cũng muốn xem</div>
      </div>
      <div className="scroll-up">
        <a href={`/movies/${id}/#`}>
          <img src="/img/scroll-up.png" width={"50px"} alt="" />
        </a>
      </div>
    </>
  );
}

export default MovieDetail;
