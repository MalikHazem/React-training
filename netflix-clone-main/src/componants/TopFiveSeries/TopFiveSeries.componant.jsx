import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { series, movies } from "../../assets/data/data";
import { totalData } from "../recentData/recentdata";
import "./topfive.css";
const TopFiveSeries = (props) => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    //filter series array based on rate
    let arrSeries = [...series];
    arrSeries.sort((one, two) =>
      one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
    );
    arrSeries = arrSeries.slice(0, 10);
    /////////////////////////////////////////
    //filter movies array based on rate
    let arrMovies = [...movies];
    arrMovies.sort((one, two) =>
      one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
    );
    arrMovies = arrMovies.slice(0, 10);
    ///////////////////////////////
    //filter recent data array based on rate
    let arrRecent = [...totalData];
    arrRecent.sort((one, two) =>
      one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
    );
    arrRecent = arrRecent.slice(0, 10);

    // check if the url is movies

    if (window.location.href.includes("movies")) {
      setTop(arrMovies);
    } // check if the url is tv show
    else if (window.location.href.includes("tvshows")) {
      setTop(arrSeries);
    } else if (window.location.href.includes("recently")) {
      setTop(arrRecent);
    }
    // else the url is home, then include everything
    else {
      let arrAll = arrMovies.concat(arrSeries);
      arrAll.sort((one, two) =>
        one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
      );
      arrAll = arrAll.slice(0, 10);
      setTop(arrAll);
    }
  }, []);

  return (
    <div className="top-5">
      {top.length !== 0 &&
        top.map((e, i) => {
          return (
            <Link
              key={e.id}
              to={e.isMovie ? `/movies/${e.id}` : `/series/${e.id}`}
            >
              <div className="lists-trend topfive">
                <span className="topfive-position">{i + 1}</span>
                <img src={e.portaitImage} className="topfive-position-img" />
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default TopFiveSeries;
