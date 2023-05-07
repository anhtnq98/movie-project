import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";

function Years() {
  const [listYears, setListYears] = useState([]);
  listYears.sort((a, b) => (a.year === b.year ? 0 : a.year > b.year ? -1 : 1));

  const loadYears = async () => {
    const result = await axios.get("http://localhost:5000/years");
    setListYears(result.data);
  };

  useEffect(() => {
    loadYears();
  }, []);

  return (
    <div className="year-over-container">
      <Rotate top right>
        <p className="year-title">
          <i className="fa-solid fa-calendar-days"></i> Năm Phát Hành
        </p>
        <div className="year-big-container">
          <div className="year-container">
            {listYears.map((years, yearsID) => {
              return (
                <div key={yearsID}>
                  <Link className="nav-link active" to={`/years/${years.id}/#`}>
                    <p className="year-block">{years.year}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Rotate>
    </div>
  );
}

export default Years;
