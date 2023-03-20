import "./mylist.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Category from "../../componants/categories/categories.componant";
import { DataContext } from "../../componants/provider/dataProvider.componant";
import SearchedItem from "../../componants/SearchedItem/SearchedItem.componant";
import { series, movies } from "../../assets/data/data";
const MyList = (props) => {
  let [list, setList] = useState([]);
  let [shows, setShows] = useState([]);
  let [searchKey, setSearchKey] = useState([]);
  let { user, setUser, seriesArr, moviesArr } = useContext(DataContext);
  useEffect(() => {
    if (searchKey.length > 0) {
      let i = 0;
      let shows = [...list];
      while (i < searchKey.length) {
        shows = shows.filter((e) => {
          return e.genre.includes(searchKey[i]);
        });
        i++;
      }
      setShows(shows);
    } else {
      setShows(list);
    }
  }, [searchKey]);
  useEffect(() => {
    if (user !== null) {
      let arrOfShow = series.filter((e) => {
        return user.myList.includes(e.id);
      });
      let arrOfMovie = movies.filter((e) => {
        return user.myList.includes(e.id);
      });
      let arr = arrOfMovie.concat(arrOfShow);
      setList(arr);
      setShows(arr);
    }
  }, []);

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
      {shows.length > 0 ? (
        <div className="myList-page">
          {shows.map((e) => {
            return <SearchedItem el={e} key={e.id} />;
          })}
        </div>
      ) : (
        <div>Empty List</div>
      )}
    </section>
  );
};

export default MyList;
