import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

function GenreNavbar() {
  const [listGenre, setListGenre] = useState([]);

  const loadGenre = async () => {
    const result = await axios.get("http://localhost:5000/genres");
    setListGenre(result.data);
  };

  useEffect(() => {
    loadGenre();
  }, []);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button" variant="black">
          <span className="small-nav-genre">
            <i className="fa-solid fa-list"></i> Thể loại
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {/* ------------ Phim Hành Động -----------*/}
          {listGenre.map((genre, genreID) => {
            return (
              <div key={genreID}>
                <Dropdown.Item>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`/genres/${genre.id}/#`}
                  >
                    <span className="small-nav-genre">
                      <i className={genre.icon}></i> {genre.name}
                    </span>
                  </Link>
                </Dropdown.Item>
              </div>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default GenreNavbar;
