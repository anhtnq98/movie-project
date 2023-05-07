import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetail.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

function MovieDetail() {
  let loginFlag = JSON.parse(localStorage.getItem("loginFlag"));
  let checkLogin = false;
  if (!loginFlag) {
    checkLogin = false;
  } else {
    checkLogin = true;
  }

  // Nhận dữ liệu từ trang trước
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      const result = await axios.get(`http://localhost:5000/movies/${id}`);
      setMovie(result.data);
    };
    loadMovie();
  }, [id]);

  // Khởi tạo giá trị comment
  var today = new Date();
  var uniq = today.getTime();

  // Lấy ngày tháng hiển thị
  var currentTime =
    today.getFullYear() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    (today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes());

  // lấy ngày để hiện theo list
  var date =
    today.getFullYear() +
    "" +
    (today.getMonth() < 10
      ? "0" + (today.getMonth() + 1).toString()
      : today.getMonth() + 1) +
    "" +
    (today.getDate() < 10 ? "0" + today.getDate().toString() : today.getDate());
  var time =
    (today.getHours() < 10
      ? "0" + today.getHours().toString()
      : today.getHours()) +
    "" +
    (today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes()) +
    "" +
    (today.getSeconds() < 10
      ? "0" + today.getSeconds().toString()
      : today.getSeconds());
  var dateTime = Number(date + time);

  const initialState = {
    id: uniq,
    movieID: id,
    userName: loginFlag?.userName,
    charName: loginFlag?.avatarChar,
    condition: "user",
    comment: "",
    like: 0,
    dislike: 0,
    dateTime: dateTime,
    currentTime: currentTime,
  };
  const [comment, setComment] = useState(initialState);
  const [listComment, setListComment] = useState([]);
  const currentComments = listComment.filter((e) => e.movieID === id);
  currentComments.sort((a, b) =>
    a.dateTime === b.dateTime ? 0 : a.dateTime > b.dateTime ? -1 : 1
  );

  const loadComment = async () => {
    const result = await axios.get("http://localhost:5000/comments");
    setListComment(result.data);
  };

  useEffect(() => {
    loadComment();
  }, []);

  // comment khi chưa đăng nhập
  const handleCanNotComment = () => {
    alert("Mời đăng nhập để bình luận");
  };

  // lấy giá trị input comment
  const handleInputComment = (e) => {
    const { name, value } = e.target;
    setComment((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleCommentButton = async (e) => {
    e.preventDefault();
    if (!comment.comment) {
      return;
    }
    setComment(comment);
    await axios.post("http://localhost:5000/comments", comment);
    setComment(initialState);
    console.log(comment);
    loadComment();
  };

  const handleLike = async (id, index) => {
    await axios.patch(`http://localhost:5000/comments/${id}`, {
      like: currentComments[index].like + 1,
    });
    loadComment();
  };

  const handleDislike = async (id, index) => {
    await axios.patch(`http://localhost:5000/comments/${id}`, {
      dislike: currentComments[index].dislike + 1,
    });
    loadComment();
  };

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
                <NavLink to={`/movies/movie-detail/${movie.id}/#`}>
                  <div>
                    <img src="/img/play.png" width={"50px"} alt="" />
                  </div>
                </NavLink>
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
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Fade>
        </div>
        <div className="comment-container">
          <p className="comment-title">Bình Luận</p>
          {checkLogin === false ? (
            <>
              <div
                onClick={handleCanNotComment}
                className="comment-input-container"
              >
                <div className="comment-avatar">
                  <img src="/img/avatar1.jpg" width={"90px"} alt="" />
                </div>
                <textarea
                  placeholder="Đăng nhập để bình luận . . . "
                  name="comment"
                  id=""
                  cols="70"
                  rows="3"
                ></textarea>
              </div>
              <div onClick={handleCanNotComment} className="comment-button">
                <p>Đăng nhập để bình luận</p>
              </div>
            </>
          ) : (
            <>
              <div className="comment-input-container">
                <div
                  style={{ width: "95px", fontSize: "55px" }}
                  className="user-avatar"
                >
                  {loginFlag.avatarChar}
                </div>
                <textarea
                  placeholder="Bình luận tại đây . . . "
                  name="comment"
                  onChange={handleInputComment}
                  value={comment.comment}
                  id=""
                  cols="70"
                  rows="2"
                ></textarea>
              </div>
              <div onClick={handleCommentButton} className="comment-button">
                <p>Bình luận</p>
              </div>
            </>
          )}

          {currentComments.map((comment, index) => (
            <div key={index} className="list-comment">
              <div
                style={{ width: "95px", fontSize: "55px" }}
                className="user-avatar"
              >
                {comment.charName}
              </div>
              <div className="comment-text">
                <div className="comment-text-first">
                  <p className="comment-user">
                    {comment.userName} ( {comment.currentTime} )
                  </p>
                  <div className="like-dislike">
                    <span
                      onClick={(e) => handleLike(comment.id, index)}
                      className="like"
                    >
                      <i className="fa-solid fa-thumbs-up"></i>{" "}
                      <span>{comment.like}</span>
                    </span>{" "}
                    <span
                      onClick={(e) => handleDislike(comment.id, index)}
                      className="dislike"
                    >
                      <i className="fa-solid fa-thumbs-down"></i>{" "}
                      <span>{comment.dislike}</span>
                    </span>{" "}
                  </div>
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
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
