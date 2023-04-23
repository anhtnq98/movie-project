import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
import "./MyNavBar.css";

function MyNavBar() {
  return (
    <>
      <div>
        <Navbar bg="black" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/img/logo4.png" width={"150px"} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <li className="nav-item ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <span className="small-nav">
                      <i class="fa-sharp fa-solid fa-house"></i> Trang chủ
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active  text-white"
                    aria-current="page"
                    to="/about"
                  >
                    <span className="small-nav">
                      <i class="fa-sharp fa-solid fa-film"></i> Thể loại
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active  text-white"
                    aria-current="page"
                    to="/contact"
                  >
                    <span className="small-nav">
                      <i class="fa-sharp fa-solid fa-phone"></i> Liên hệ
                    </span>
                  </Link>
                </li>
              </Nav>

              <div className="d-flex">
                <Link to="/users/add">
                  <Button variant="outline">
                    <button class="button-57" role="button">
                      <span class="text">Đăng nhập</span>
                      <span>Login Here</span>
                    </button>
                  </Button>{" "}
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
