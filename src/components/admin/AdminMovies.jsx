import React from "react";
import "./AdminManager.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AdminMovies() {
  // Khởi tạo giá trị người dùng từ api
  const [data, setData] = useState([]);
  data.sort((a, b) =>
    a.updateTime === b.updateTime ? 0 : a.updateTime > b.updateTime ? -1 : 1
  );
  // data.sort((a, b) => (a.updateTime - b.updateTime));
  const [dataTV, setDataTV] = useState([]);
  dataTV.sort((a, b) =>
    a.updateTime === b.updateTime ? 0 : a.updateTime > b.updateTime ? -1 : 1
  );

  // Giá trị để chuyển đổi phim lẻ và phim bộ
  const [changeMovieAndTv, setChangeMovieAndTv] = useState("movie");

  // Giá trị modal
  const [currentMovie, setCurrentMovie] = useState({});
  const [showGenre, setShowGenre] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showMovie, setShowMovie] = useState(false);

  // Giá trị chuyển trang
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
  const [pageStyle, setPageStyle] = useState(1);

  // Chuyển đổi phim lẻ và phim bộ
  const handleChangeMovieAndTv = () => {
    if (changeMovieAndTv === "movie") {
      setChangeMovieAndTv("tv-series");
    } else if (changeMovieAndTv === "tv-series") {
      setChangeMovieAndTv("movie");
    }
  };

  // Xem thể loại
  const handleGenreClose = () => setShowGenre(false);
  const handleGenreShow = (movie) => {
    if (!movie) {
      return;
    }
    setCurrentMovie(movie);
    setShowGenre(true);
  };

  // Xem chi tiết
  const handleDetailClose = () => setShowDetail(false);
  const handleDetailShow = (movie) => {
    if (!movie) {
      return;
    }
    setCurrentMovie(movie);
    setShowDetail(true);
  };

  // Xem trailer
  const handleTrailerClose = () => setShowTrailer(false);
  const handleTrailerShow = (movie) => {
    if (!movie) {
      return;
    }
    setCurrentMovie(movie);
    setShowTrailer(true);
  };

  // Xem movie
  const handleMovieClose = () => setShowMovie(false);
  const handleMovieShow = (movie) => {
    if (!movie) {
      return;
    }
    setCurrentMovie(movie);
    setShowMovie(true);
  };

  // Trạng thái active của router
  const navLinkClassName = ({ isActive }) =>
    isActive ? "left-bar-icon-active" : "left-bar-icon";

  // Gọi api lấy giá trị movies
  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/movies");
    setData(result.data);
  };

  // Gọi api lấy giá trị tv-series
  const loadDataTV = async () => {
    const resultTV = await axios.get("http://localhost:5000/tv-series");
    setDataTV(resultTV.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn chắc chắc muốn xóa chứ?") === true) {
      await axios.delete(`http://localhost:5000/movies/${id}`);
      loadData();
    }
  };

  // Chuyển trang
  const handleChangePages = (page) => {
    console.log(page, "this is page");
    setPageStyle(page);
  };

  // Sang dãy trang trước
  const handlePrevPages = () => {
    if (pageNumbers[0] !== 1) {
      const newPageNumbers = pageNumbers.map((e) => e - 5);
      setPageNumbers(newPageNumbers);
      setPageStyle(newPageNumbers[0]);
    }
  };

  // Sang dãy trang tiếp
  const handleNextPages = () => {
    const newPageNumbers = pageNumbers.map((e) => e + 5);
    setPageNumbers(newPageNumbers);
    setPageStyle(newPageNumbers[0]);
    console.log(pageNumbers);
  };

  // Xử Lý bất đồng bộ
  useEffect(() => {
    loadData();
    loadDataTV();
  }, []);

  return (
    <>
      <Fade top cascade>
        <div className="admin-manager-title">
          <i className="fa-sharp fa-solid fa-film"></i> QUẢN LÝ PHIM
        </div>
      </Fade>
      <Fade bottom>
        {changeMovieAndTv === "movie" ? (
          <>
            <div
              onClick={handleChangeMovieAndTv}
              className="to-movie-tv-container"
            >
              <div className="to-movie-tv">
                <img src="/img/arrow.gif" width={"55px"} alt="" />
                Chuyển Sang Phim Bộ
              </div>
            </div>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={
                "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh/add-movie"
              }
            >
              <div className="add-movies-container">
                <div className="add-movies">
                  <i className="fa-sharp fa-solid fa-plus"></i> Thêm Phim Lẻ
                </div>
              </div>
            </NavLink>
          </>
        ) : (
          <>
            <div
              onClick={handleChangeMovieAndTv}
              className="to-movie-tv-container"
            >
              <div className="to-movie-tv">
                <img src="/img/arrow.gif" width={"55px"} alt="" />
                Chuyển Sang Phim Lẻ
              </div>
            </div>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={
                "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh/add-tv-series"
              }
            >
              <div className="add-movies-container">
                <div className="add-movies">
                  <i className="fa-sharp fa-solid fa-plus"></i> Thêm Phim Bộ
                </div>
              </div>
            </NavLink>
          </>
        )}
      </Fade>
      {changeMovieAndTv === "movie" ? (
        <>
          <Fade left>
            <div className="admin-users-container">
              <div className="left-bar">
                <NavLink
                  to={
                    "/adminsdjsodkjgsdoigjsdi3454sdgrgr/user25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý người dùng">
                    <i className="fa-sharp fa-solid fa-user"></i>
                  </div>
                </NavLink>
                <NavLink
                  to={
                    "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý phim">
                    <i className="fa-sharp fa-solid fa-film"></i>
                  </div>
                </NavLink>
                <NavLink
                  to={
                    "/adminsdjsodkjgsdoigjsdi3454sdgrgr/comment25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý bình luận">
                    <i className="fa-sharp fa-solid fa-comments"></i>
                  </div>
                </NavLink>
              </div>
              {/* Quản lý thông tin phim */}
              <div className="main-bar">
                <Table className="table-modal" striped bordered hover>
                  <thead>
                    <tr className="bg-dark text-white">
                      <th>
                        <span className="main-bar-title">Ảnh</span>{" "}
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Tên Phim
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Thể Loại
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Quốc Gia
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Năm
                        </span>
                      </th>
                      <th>
                        <span className="main-bar-title">Nội dung</span>
                      </th>
                      <th colSpan={2}>
                        <span className="main-bar-title">Trailer / Phim</span>
                      </th>
                      <th colSpan={2}>
                        <span span className="main-bar-title">
                          Sửa / Xóa
                        </span>
                      </th>
                    </tr>
                  </thead>

                  {data
                    .slice(pageStyle * 5 - 5, pageStyle * 5)
                    .map((movie, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <span className="detail-infor">
                              <img src={movie.poster} width={"52px"} height={"70px"} alt="" />
                            </span>{" "}
                          </td>
                          <td>
                            <span className="detail-infor">{movie.title}</span>
                          </td>
                          <td>
                            <span className="genre">
                              <i
                                onClick={(e) => handleGenreShow(movie)}
                                className="fa-sharp fa-solid fa-box-open"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="detail-infor">
                              {movie.country}
                            </span>
                          </td>
                          <td>
                            <span className="detail-infor">{movie.year}</span>
                          </td>
                          <td>
                            <span className="show">
                              <i
                                onClick={(e) => handleDetailShow(movie)}
                                className="fa-solid fa-eye"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="flim">
                              <i
                                onClick={(e) => handleTrailerShow(movie)}
                                className="fa-sharp fa-solid fa-film"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="flim">
                              <i
                                onClick={(e) => handleMovieShow(movie)}
                                className="fa-sharp fa-solid fa-film"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span
                              // onClick={(e) => handleDelete(movie.id)}
                              className="edit"
                            >
                              <i
                                title="Sửa"
                                className="fa-solid fa-pen-to-square"
                              ></i>
                            </span>{" "}
                          </td>
                          <td>
                            <span
                              onClick={(e) => handleDelete(movie.id)}
                              className="delete"
                            >
                              <i
                                title="Xóa"
                                className="fa-sharp fa-solid fa-trash"
                              ></i>
                            </span>{" "}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </Table>
              </div>
              {/* Hết quản lý */}
            </div>
          </Fade>

          {/* Modal hiện thể loại phim */}
          <Modal
            className="modal-big-container"
            show={showGenre}
            onHide={handleGenreClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">My Genre</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreOne}
              </p>
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreTwo}
              </p>
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreThree}
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleGenreClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc thể loại */}

          {/* Modal hiện chi tiết phim */}
          <Modal
            className="modal-big-container"
            show={showDetail}
            onHide={handleDetailClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-detail">
                {currentMovie && currentMovie.plot}
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleDetailClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc chi tiết */}

          {/* Modal hiện trailer phim */}
          <Modal
            className="modal-big-container"
            show={showTrailer}
            onHide={handleTrailerClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-detail">
                <iframe
                  width={"435"}
                  height={"250"}
                  src={`https://www.youtube.com/embed/${
                    currentMovie && currentMovie.trailer
                  }`}
                  title={currentMovie && currentMovie.trailer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleTrailerClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc trailer */}

          {/* Modal hiện phim */}
          <Modal
            className="modal-big-container"
            show={showMovie}
            onHide={handleMovieClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Video</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-detail">
                <video
                  width={"435"}
                  height={"250"}
                  src={currentMovie && currentMovie.video}
                  controls
                ></video>
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleMovieClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc phim */}
        </>
      ) : (
        ////////////////////////////////////////////////////
        ///////////////////////////////////////////////////
        <>
          <Fade left>
            <div className="admin-users-container">
              <div className="left-bar">
                <NavLink
                  to={
                    "/adminsdjsodkjgsdoigjsdi3454sdgrgr/user25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý người dùng">
                    <i className="fa-sharp fa-solid fa-user"></i>
                  </div>
                </NavLink>
                <NavLink
                  to={
                    "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý phim">
                    <i className="fa-sharp fa-solid fa-film"></i>
                  </div>
                </NavLink>
                <NavLink
                  to={
                    "/adminsdjsodkjgsdoigjsdi3454sdgrgr/comment25855555kpgmhdu465ggfy8fhdh"
                  }
                  className={navLinkClassName}
                >
                  <div title="Quản lý bình luận">
                    <i className="fa-sharp fa-solid fa-comments"></i>
                  </div>
                </NavLink>
              </div>
              {/* Quản lý thông tin phim */}
              <div className="main-bar">
                <Table className="table-modal" striped bordered hover>
                  <thead>
                    <tr className="bg-dark text-white">
                      <th>
                        <span className="main-bar-title">Ảnh</span>{" "}
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Tên Phim
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Thể Loại
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Quốc Gia
                        </span>
                      </th>
                      <th>
                        <span span className="main-bar-title">
                          Năm
                        </span>
                      </th>
                      <th>
                        <span className="main-bar-title">Nội dung</span>
                      </th>
                      <th colSpan={2}>
                        <span className="main-bar-title">Trailer / Phim</span>
                      </th>
                      <th colSpan={2}>
                        <span span className="main-bar-title">
                          Sửa / Xóa
                        </span>
                      </th>
                    </tr>
                  </thead>

                  {dataTV
                    .slice(pageStyle * 5 - 5, pageStyle * 5)
                    .map((movie, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <span className="detail-infor">
                              <img src={movie.poster} width={"52px"} alt="" />
                            </span>{" "}
                          </td>
                          <td>
                            <span className="detail-infor">{movie.title}</span>
                          </td>
                          <td>
                            <span className="genre">
                              <i
                                onClick={(e) => handleGenreShow(movie)}
                                className="fa-sharp fa-solid fa-box-open"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="detail-infor">
                              {movie.country}
                            </span>
                          </td>
                          <td>
                            <span className="detail-infor">{movie.year}</span>
                          </td>
                          <td>
                            <span className="show">
                              <i
                                onClick={(e) => handleDetailShow(movie)}
                                className="fa-solid fa-eye"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="flim">
                              <i
                                onClick={(e) => handleTrailerShow(movie)}
                                className="fa-sharp fa-solid fa-film"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span className="flim">
                              <i
                                onClick={(e) => handleMovieShow(movie)}
                                className="fa-sharp fa-solid fa-film"
                              ></i>
                            </span>
                          </td>
                          <td>
                            <span
                              // onClick={(e) => handleDelete(movie.id)}
                              className="edit"
                            >
                              <i
                                title="Sửa"
                                className="fa-solid fa-pen-to-square"
                              ></i>
                            </span>{" "}
                          </td>
                          <td>
                            <span
                              onClick={(e) => handleDelete(movie.id)}
                              className="delete"
                            >
                              <i
                                title="Xóa"
                                className="fa-sharp fa-solid fa-trash"
                              ></i>
                            </span>{" "}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </Table>
              </div>
              {/* Hết quản lý */}
            </div>
          </Fade>

          {/* Modal hiện thể loại phim */}
          <Modal
            className="modal-big-container"
            show={showGenre}
            onHide={handleGenreClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">My Genre</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreOne}
              </p>
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreTwo}
              </p>
              <p className="detail-infor-genre">
                {currentMovie && currentMovie.genreThree}
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleGenreClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc thể loại */}

          {/* Modal hiện chi tiết phim */}
          <Modal
            className="modal-big-container"
            show={showDetail}
            onHide={handleDetailClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-detail">
                {currentMovie && currentMovie.plot}
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleDetailClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc chi tiết */}

          {/* Modal hiện trailer phim */}
          <Modal
            className="modal-big-container"
            show={showTrailer}
            onHide={handleTrailerClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              <p className="detail-infor-detail">
                <iframe
                  width={"435"}
                  height={"250"}
                  src={`https://www.youtube.com/embed/${
                    currentMovie && currentMovie.trailer
                  }`}
                  title={currentMovie && currentMovie.trailer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleTrailerClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc trailer */}

          {/* Modal hiện phim */}
          <Modal
            className="modal-big-container"
            show={showMovie}
            onHide={handleMovieClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-header">Movie Video</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-container">
              {currentMovie.videos?.map((video, id) => (
                <p key={id} className="detail-infor-detail">
                  <div>
                    {currentMovie.title} - Tập {id + 1}
                  </div>
                  <video
                    width={"435"}
                    height={"250"}
                    src={video}
                    controls
                  ></video>
                </p>
              ))}
            </Modal.Body>
            <Modal.Footer className="modal-container">
              <Button variant="dark" onClick={handleMovieClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Kết thúc phim */}
        </>
      )}

      {/* Chuyển trang */}
      <div className="page-change">
        <p onClick={handlePrevPages} className="page-number">
          &lt;
        </p>
        {pageNumbers.map((page, pageID) => (
          <p
            onClick={(e) => handleChangePages(page)}
            key={pageID}
            className={
              page !== pageStyle ? "page-number" : "page-number-active"
            }
          >
            {page}
          </p>
        ))}
        <p onClick={handleNextPages} className="page-number">
          &gt;
        </p>
      </div>
    </>
  );
}

export default AdminMovies;
