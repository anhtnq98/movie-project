import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fir-upload-img-ft02.appspot.com/o/side-bar%2Flogo4.png?alt=media&token=37b5ae04-cf29-484b-8aea-cf3ab8cbf47e"
              width={"250px"}
              alt=""
            />
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
          </div>
          <div className="part-two">
            <Link className="nav-link active">
              <div>
                <p className="footer-center-head">Phim Lẻ</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Tâm Lý - Trinh Thám</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Khoa Học Viễn Tưởng</p>
              </div>
            </Link>
            <Link className="nav-link active">
              <div>
                <p className="footer-center-center">Phim Kinh Dị</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Về chúng tôi</span>
            Cập nhật phim hằng ngày, giúp người xem có trải nghiệm tốt nhất
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
