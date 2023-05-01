import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";
import Fade from "react-reveal/Fade";

function MyCarousel() {
  return (
    <div className="carousel-container">
      <Fade top>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src="/img/big-slide1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Suicide Squad</h3>
              <p>Harley Quinn & Joker by VeilaKs-Wallpapers</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://cdn.chanhtuoi.com/uploads/2022/12/phim-chieu-rap6.jpg.webp"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Avengers: Infinity War</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="/img/big-slide2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Avengers: Infinity War</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Fade>
    </div>
  );
}

export default MyCarousel;
