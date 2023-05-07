import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import "./MyNavBar.css";
import GenreNavbar from "./GenreNavbar";
import CountryNavbar from "./CountryNavbar";
import SearchNavbar from "./SearchNavbar";
import Slide from "react-reveal/Slide";

function MyNavBar() {
  let loginFlag = JSON.parse(localStorage.getItem("loginFlag"));
  let checkLogin = false;
  if (!loginFlag) {
    checkLogin = false;
  } else {
    checkLogin = true;
  }

  const handleLogOut = () => {
    localStorage.removeItem("loginFlag");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="nav-container">
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  className="logo"
                  src="/img/logo4.png"
                  width={"135px"}
                  alt=""
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <p className="hamburger-container">
                {" "}
                <img
                  className="hamburger"
                  src="/img/hamburger-nav3.gif"
                  width={"100px"}
                  alt="Nhấn để xem menu"
                />
              </p>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                {/*---------- Trang chủ ------- */}
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <span className="small-nav">
                      <i className="fa-sharp fa-solid fa-house"></i> Trang chủ
                    </span>
                  </Link>
                </li>
                {loginFlag !== null && loginFlag.condition === "admin" ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/adminsdjsodkjgsdoigjsdi3454sdgrgr"
                      >
                        <span className="small-nav">
                          <i className="fa-sharp fa-solid fa-screwdriver-wrench"></i>{" "}
                          Quản Lý Admin
                        </span>
                      </Link>
                      {/* <SearchNavbar /> */}
                    </li>
                    <SearchNavbar />
                  </>
                ) : (
                  <>
                    {/*---------- Phim Lẻ ------- */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/movies"
                      >
                        <span className="small-nav">
                          <i className="fa-sharp fa-solid fa-film"></i> Phim Lẻ
                        </span>
                      </Link>
                    </li>
                    {/*---------- Phim Bộ ------- */}
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/tv-series"
                      >
                        <span className="small-nav">
                          <i className="fa-solid fa-tv"></i> Phim Bộ
                        </span>
                      </Link>
                    </li>
                    {/* ------------ Thể loại --------- */}
                    <GenreNavbar />
                    {/* ------------ Quốc gia --------- */}
                    <CountryNavbar />

                    <SearchNavbar />
                  </>
                )}
              </Nav>
              {/* -------- Đăng nhập --------- */}
              <div className="d-flex">
                {checkLogin === false ? (
                  <>
                    <Slide top cascade>
                      <Link to="/login">
                        <button className="button-57">
                          <span className="text">Đăng nhập</span>
                          <span>Login Here</span>
                        </button>
                      </Link>
                    </Slide>
                  </>
                ) : (
                  <>
                    <Slide top cascade>
                      <div className="logout-button">
                        <Slide top cascade>
                          <div className="logout-button-user">
                            {loginFlag !== null &&
                            loginFlag.condition === "admin" ? (
                              <>
                                <div>
                                  <Slide top cascade>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    Mừng bạn trở lại, {loginFlag.userName}
                                  </Slide>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  title={`Tài khoản: ${loginFlag.userName} (Nhấn để xem chi tiết)`}
                                  className="user-avatar"
                                >
                                  {loginFlag.avatarChar}
                                </div>
                              </>
                            )}
                          </div>
                        </Slide>
                        <button onClick={handleLogOut} className="button-57">
                          <span className="text">
                            <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                          </span>
                          <span>Đăng xuất</span>
                        </button>
                      </div>
                    </Slide>
                  </>
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MyNavBar;
