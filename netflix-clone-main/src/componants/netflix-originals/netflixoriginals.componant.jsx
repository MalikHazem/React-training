import { useEffect, useState } from "react";
import { series, movies } from "../../assets/data/data";
import GenreComponant from "../genrecontent/genrecontent.componant";
import NetflixOriginalsItems from "../netflix-originals-items/netflix-originals-items.componant";
import { totalData } from "../recentData/recentdata";
const NetflixOriginals = () => {
  let [originalsArr, setOriginalsArr] = useState([]);
  useEffect(() => {
    //filter series array based on genre
    let arrSeries = series.filter((ele) => {
      return ele.isNetflixSeries;
    });
    //filter movies array based on genre
    let arrMovies = movies.filter((ele) => {
      return ele.isNetflixSeries;
    });
    //filter recent data array based on genre
    let arrRecent = totalData.filter((ele) => {
      return ele.isNetflixSeries;
    });
    // check if the url is movies

    if (window.location.href.includes("movies")) {
      setOriginalsArr(arrMovies);
    } // check if the url is tv show
    else if (window.location.href.includes("tvshows")) {
      setOriginalsArr(arrSeries);
    } else if (window.location.href.includes("recently")) {
      setOriginalsArr(arrRecent);
    }
    // else the url is home, then include everything
    else {
      let arrAll = arrMovies.concat(arrSeries);
      setOriginalsArr(arrAll);
    }
  }, []);
  return (
    <>
      {originalsArr.length > 0 ? (
        <div className="category-group">
          <h3>Netflix Originals</h3>
          <div className="list-group">
            {originalsArr.map((e, i) => {
              return <NetflixOriginalsItems e={e} key={e + i} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default NetflixOriginals;
