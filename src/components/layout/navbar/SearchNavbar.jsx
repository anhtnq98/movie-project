import React, { useState } from "react";

function SearchNavbar() {
  // Khởi tạo giá trị input tìm kiếm
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <div onClick={handleSearchActiveOn} className={boxActive}>
      <form name="search">
        <input
          type="text"
          className={searchActive}
          name="txt"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Tìm kiếm phim"
        />
      </form>
      <i className="fas fa-search" />
      <span className={xActive} onClick={handleSearchActiveOff}>
        <i className="fa-sharp fa-solid fa-circle-xmark"></i>
      </span>
    </div>
  );
}

export default SearchNavbar;
