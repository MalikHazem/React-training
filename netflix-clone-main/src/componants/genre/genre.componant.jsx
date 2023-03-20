import { useContext, useEffect, useState } from "react";
import GenreComponant from "../genrecontent/genrecontent.componant";
import { DataContext } from "../provider/dataProvider.componant";
import { totalData } from "../recentData/recentdata";
const Genre = (props) => {
  const { seriesArr, moviesArr, user, myList } = useContext(DataContext);
  let [genreArr, setGenreArr] = useState([]);
  useEffect(() => {
    //filter series array based on genre
    let arrSeries = seriesArr.filter((ele) => {
      return ele.genre.includes(props.genre);
    });
    //filter movies array based on genre
    let arrMovies = moviesArr.filter((ele) => {
      return ele.genre.includes(props.genre);
    });
    //filter recent data array based on genre
    let arrRecent = totalData.filter((ele) => {
      return ele.genre.includes(props.genre);
    });
    // check if the url is movies

    if (window.location.href.includes("movies")) {
      setGenreArr(arrMovies);
    } // check if the url is tv show
    else if (window.location.href.includes("tvshows")) {
      setGenreArr(arrSeries);
    } else if (window.location.href.includes("recently")) {
      setGenreArr(arrRecent);
    }
    // else the url is home, then include everything
    else {
      let arrAll = arrMovies.concat(arrSeries);
      setGenreArr(arrAll);
    }
  }, [myList, user]);
  const genre = props.genre.charAt(0).toUpperCase() + props.genre.slice(1);

  return (
    <>
      {genreArr.length > 0 ? (
        <div className="category-group">
          <h3>{genre}</h3>
          <div className="list-group">
            <GenreComponant arr={genreArr} />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Genre;
