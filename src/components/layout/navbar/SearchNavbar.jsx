import React, { useState } from "react";
import { useNavigate } from "react-router";

function SearchNavbar() {
  // Khởi tạo giá trị input tìm kiếm
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  // Ẩn và hiện thanh tìm kiếm
  const [searchActive, setSearchActive] = useState("input");
  const [boxActive, setBoxActive] = useState("box");
  const [xActive, setXActive] = useState("x-style");
  const handleSearchActiveOn = () => {
    if (searchActive === "input") {
      setSearchActive("input-active");
      setBoxActive("box-active");
      setXActive("x-style-active");
      return;
    }
  };
  const handleSearchActiveOff = () => {
    if (searchActive === "input-active") {
      setSearchActive("input");
      setBoxActive("box");
      setXActive("x-style");
      return;
    }
  };

  const handleButtonSearch = () => {
    navigate("/search", { state: searchValue });
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/search", { state: searchValue });
    }
    return;
  };

  return (
    <div onClick={handleSearchActiveOn} className={boxActive}>
      <input
        type="text"
        className={searchActive}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnterSearch}
        placeholder="Tìm kiếm phim"
      />

      <i onClick={handleButtonSearch} className="fas fa-search" />
      <span className={xActive} onClick={handleSearchActiveOff}>
        <i className="fa-sharp fa-solid fa-circle-xmark"></i>
      </span>
    </div>
  );
}

export default SearchNavbar;
