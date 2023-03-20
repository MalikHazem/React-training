import "./list.css";
import Genre from "../genre/genre.componant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import TopFiveSeries from "../TopFiveSeries/TopFiveSeries.componant";
import { DataContext } from "../provider/dataProvider.componant";
import { useContext, useEffect, useState } from "react";
import NetflixOriginals from "../netflix-originals/netflixoriginals.componant";

// const { user, myList } = useContext(DataContext);
// let [allListsGenre, setAllListGenre] = useState([]);
// useEffect(() => {
// (
const List = (props) => {
  const allListsGenre = [
    "drama",
    "action",
    "history",
    "crime",
    "fantasy",
    "thriller",
    "romance",
  ];

  return (
    <div className="List">
      {allListsGenre.map((e, i) => {
        return <Genre genre={e} key={e + i} />;
      })}
      <NetflixOriginals />
      <TopFiveSeries />
      {/* {page !== "movies" && (
        <div className="category-group ">
          <h3>Top 5</h3>
          <div className="list-group">
            <TopFiveSeries series={series} />
          </div>
        </div>
      )}

      {page === "home" && (
        <div className="category-group">
          <h3>Movies</h3>
          <div className="list-group">
            <MoviesList series={series} movies={movies} />
            <FontAwesomeIcon
              className="arrow-right-icon"
              icon={faGreaterThan}
            />
          </div>
        </div> */}
    </div>
  );
};
export default List;
