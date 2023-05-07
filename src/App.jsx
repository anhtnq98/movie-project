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
import AdminUsers from "./components/admin/AdminUsers";
import Error from "./components/pages/error/Error";
import AdminManager from "./components/admin/AdminManager";
import AdminMovies from "./components/admin/AdminMovies";
import AdminComments from "./components/admin/AdminComments";
import AddMovies from "./components/admin/AddMovies";
import AddTvSeries from "./components/admin/AddTvSeries";
import YearsDetail from "./components/pages/year/YearsDetail";
import GenreDetail from "./components/pages/genre/GenreDetail";
import MoviesPlayer from "./components/pages/player/MoviesPlayer";
import SearchValue from "./components/pages/search/SearchValue";
import CountryDetail from "./components/pages/country/CountryDetail";

function App() {
  return (
    <div className="App">
      <>
        <MyNavBar />
        <Snow />
        <Routes>
          <Route path="/movies/movie-detail/:id" element={<MoviesPlayer />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/tv-series/:id" element={<TvSeriesDetail />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/years/:id" element={<YearsDetail />} />
          <Route path="/genres/:id" element={<GenreDetail />} />
          <Route path="/search" element={<SearchValue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/adminsdjsodkjgsdoigjsdi3454sdgrgr"
            element={<AdminManager />}
          />
          <Route
            path="/adminsdjsodkjgsdoigjsdi3454sdgrgr/user25855555kpgmhdu465ggfy8fhdh"
            element={<AdminUsers />}
          />
          <Route
            path="/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh"
            element={<AdminMovies />}
          />
          <Route
            path="/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh/add-movie"
            element={<AddMovies />}
          />
          <Route
            path="/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh/add-tv-series"
            element={<AddTvSeries />}
          />
          <Route
            path="/adminsdjsodkjgsdoigjsdi3454sdgrgr/comment25855555kpgmhdu465ggfy8fhdh"
            element={<AdminComments />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
