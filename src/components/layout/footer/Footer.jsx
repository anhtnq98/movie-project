import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <div>
            <img src="./img/logo4.png" width={"300px"} alt="" />
          </div>
          <p className="footer-company-name">Anie Movie © Copyright 2023</p>
        </div>
        <div className="footer-center">
          <div className="part-one">
            <Link className="nav-link active">
              <div>
                <p className="footer-center-head">Phim Bộ</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Hành Động</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Tình Cảm</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Tình Cảm</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Tình Cảm</p>
              </div>
            </Link>
          </div>
          <div className="part-two">
            <Link className="nav-link active">
              <div>
                <p className="footer-center-head">Phim Bộ</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Hành Động</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Tình Cảm</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Về chúng tôi</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <Link className="nav-link active">
              <p>
                <i className="fa-brands fa-facebook"></i>
              </p>{" "}
            </Link>
            <Link className="nav-link active">
              <p>
                <i className="fa-brands fa-twitter"></i>
              </p>{" "}
            </Link>
            <Link className="nav-link active">
              <p>
                <i className="fa-brands fa-linkedin"></i>
              </p>{" "}
            </Link>
            <Link className="nav-link active" to={"/"}>
              <p>
                <i className="fa-brands fa-github-alt"></i>
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
