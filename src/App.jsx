import { Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/layout/navbar/MyNavBar";
import Home from "./components/pages/home/Home";
import Snow from "./components/layout/snow/Snow";
import Footer from "./components/layout/footer/Footer";
import MovieDetail from "./components/pages/movies/MovieDetail";
import TvSeriesDetail from "./components/pages/movies/TvSeriesDetail";
import Login from "./components/pages/register-login/Login";
import Register from "./components/pages/register-login/Register";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Snow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/tv-series/:id" element={<TvSeriesDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
