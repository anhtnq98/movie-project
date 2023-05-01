import React from "react";
import MyCarousel from "./MyCarousel";
import "./Home.css";
import Sidebar from "../../layout/sidebar/Sidebar";
import NewMovieSlider from "./NewMovieSlider";
import HotMovie from "./HotMovie";
import HotTvSeries from "./HotTvSeries";
import ScrollUp from "./ScrollUp";

function Home() {
  return (
    <>
      <div className="first-container">
        <div className="main">
          <MyCarousel />
          <NewMovieSlider />
          <HotMovie />
          <HotTvSeries />
          <ScrollUp />
        </div>
        <div className="side-bar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
