import { Route, Routes } from "react-router";
import "./App.css";
import MyNavBar from "./components/layout/MyNavBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
