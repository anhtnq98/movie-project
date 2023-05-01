import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function CountryNavbar() {
  const [listCountry, setListCountry] = useState([]);

  const loadCountry = async () => {
    const result = await axios.get("http://localhost:5000/countries");
    setListCountry(result.data);
  };

  useEffect(() => {
    loadCountry();
  }, []);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button" variant="black">
          <span className="small-nav-genre">
            <i className="fa-solid fa-globe"></i> Quốc Gia
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {listCountry.map((countries, countryID) => {
            return (
              <div key={countryID}>
                <Dropdown.Item>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={countries.href}
                  >
                    <span className="small-nav-genre">{countries.name}</span>
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

export default CountryNavbar;
