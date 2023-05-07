import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function SearchValue() {
  const [allFlims, setAllFlims] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const data = async () => {
    const resultMovie = await axios.get(`http://localhost:5000/movies`);
    const resultTv = await axios.get(`http://localhost:5000/tv-series`);
    const allFilm = [...resultMovie.data, ...resultTv.data];
    setAllFlims(allFilm);
  };

  const location = useLocation();

  useEffect(() => {
    const newSearchResult = allFlims?.filter((e) =>
      e.title.toLowerCase().includes(location.state)
    );
    setSearchResult(newSearchResult);
  }, [allFlims]);

  useEffect(() => {
    data();
  }, [location.state]);

  return <div>{searchResult?.map((e) => e.title)}</div>;
}

export default SearchValue;
