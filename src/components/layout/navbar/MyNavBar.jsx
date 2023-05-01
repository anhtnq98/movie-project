import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import "./MyNavBar.css";
import GenreNavbar from "./GenreNavbar";
import CountryNavbar from "./CountryNavbar";
import SearchNavbar from "./SearchNavbar";

function MyNavBar() {
  return (
    <>
      <div className="nav-container">
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src="/img/logo4.png" width={"135px"} alt="" />
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
              </Nav>
              {/* -------- Đăng nhập --------- */}
              <div className="d-flex">
                <Link to="/login">
                  <button className="button-57">
                    <span className="text">Đăng nhập</span>
                    <span>Login Here</span>
                  </button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MyNavBar;
