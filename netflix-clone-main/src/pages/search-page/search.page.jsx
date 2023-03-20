// import { useNavigate } from "react-router-dom";
import "./searchpage.css";
import { Link, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { movies, series } from "../../assets/data/data";
import Item from "../../componants/item/item.componant";
import SearchedItem from "../../componants/SearchedItem/SearchedItem.componant";
import Category from "../../componants/categories/categories.componant";
const SearchPage = (props) => {
  // let {seriesArr , moviesArr } = useContext(DataC);
  let [params, setParams] = useSearchParams();
  let [shows, setShows] = useState([]);
  const getTheQuery = params.get("query") || "";
  let [searchKey, setSearchKey] = useState([]);
  // console.log(props.onQuery());
  useEffect(() => {
    let querySearch = getTheQuery.toLowerCase().trim();
    let filteredMovies = movies.filter((e) => {
      let isMatched = false;
      isMatched =
        e.name.toLowerCase().includes(querySearch) ||
        e.genre.includes(querySearch);
      return isMatched;
    });

    let filteredseries = series.filter((e) => {
      let isMatched = false;
      isMatched =
        e.name.toLowerCase().includes(querySearch) ||
        e.genre.includes(querySearch);

      return isMatched;
    });
    const total = filteredMovies.concat(filteredseries);
    if (searchKey.length > 0) {
      let i = 0;
      let shows = [...total];
      while (i < searchKey.length) {
        shows = shows.filter((e) => {
          return e.genre.includes(searchKey[i]);
        });
        i++;
      }
      setShows(shows);
    } else {
      setShows(total);
    }
  }, [getTheQuery, searchKey]);
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
    <section className="search-area">
      <div className="categories">
        {allListsGenre.map((e, i) => {
          return (
            <Category
              key={e + i}
              category={e}
              shows={shows}
              setShows={setShows}
              setSearchKey={setSearchKey}
              searchKey={searchKey}
            />
          );
        })}
      </div>
      <div className="search-page">
        {shows.map((e) => {
          return <SearchedItem el={e} key={e.id} />;
        })}
      </div>
    </section>
  );
};

export default SearchPage;
