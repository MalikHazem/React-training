import "./oneitem.css";
import logo from "../../assets/imgs/logo/n.png";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../componants/provider/dataProvider.componant";
import { Check, Play, Plus, ThumbsUp } from "phosphor-react";
import { movies, series } from "../../assets/data/data";
const OneItemPage = () => {
  const [rows, setRows] = useState([]);
  let { seriesArr, moviesArr, showID, setshowID, user, setUser } =
    useContext(DataContext);
  let [params, setParams] = useState(parseInt(useParams().id));
  const [content, setContent] = useState(null);
  const [isInMyList, setIsInMyList] = useState(
    user.myList.includes(showID) || user.myList.includes(params)
  );
  let [arr, setArr] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const arr1 = movies;
    const arr2 = series;
    setArr([...arr1, ...arr2]);
    let all = [...arr1, ...arr2];

    let page = all.filter((theelement) => {
      return params === theelement.id || theelement.id === showID;
    });
    setContent(page[0]);
  }, []);

  useEffect(() => {
    if (content !== null && !content.isMovie) {
      let arr = [];
      for (let i = 0; i < content.episodes.s1; i++) {
        arr.push(1 + i);
      }
      setRows(arr);
    }
  }, [content]);

  const handleClick = () => {
    setIsInMyList(!isInMyList);
  };

  useEffect(() => {
    if (
      !isInMyList &&
      (user.myList.includes(showID) || user.myList.includes(params))
    ) {
      const newList = user.myList.filter((e) => {
        return e !== showID || e !== params;
      });
      const newUser = { ...user, myList: newList };
      setUser(newUser);
    } else if (isInMyList) {
      if (user !== null && !user.myList.includes(showID)) {
        let newList = [...user.myList, showID];
        const newUser = { ...user, myList: newList };
        setUser(newUser);
      }
    }
  }, [isInMyList]);

  useEffect(() => {
    let pageContent = null;
    if (seriesArr.length > 0 && moviesArr.length > 0) {
      if (window.location.pathname.includes("series")) {
        pageContent = seriesArr.filter((e) => {
          let id = e.id === params || e.id === showID;
          return id;
        });
      } else {
        pageContent = moviesArr.filter((e) => {
          let id = e.id === params || e.id === showID;
          return id;
        });
      }
    } else {
      pageContent = arr.filter((e) => {
        let id = e.id === params || e.id === showID;
        return id;
      });
    }
    if (pageContent[0]) {
      setContent(pageContent[0]);
    }
  }, [showID]);
  const hanlePlay = () => {
    navigate(`/play/${params || showID}`);
  };
  return (
    <div className="oneItem-container">
      {content !== null && (
        <div className="oneItem">
          <img src={content.landscapeImg} alt="" className="show-poster" />
          <span className="upperlayer"></span>
          {/* <OneItemVid id={params} content={content} /> */}
          <div className="one-item-info">
            {content.isNetflixSeries && (
              <div className="netflixLogo">
                <img src={logo} alt="logo" className="logo" />
                <span>{content.isMovie ? "Movies" : "Series"}</span>
              </div>
            )}
            <h1>{content.name}</h1>
            <div className="show-info">
              <span className="match">97% Match</span>
              <span className="age">13+</span>
              <span className="duration">
                {content.isMovie ? (
                  <>{content.Duration}</>
                ) : (
                  <>
                    <span>
                      {content.episodes.s1}
                      {"   "}
                      Episodes
                      {"   "}
                    </span>
                    <span>
                      {content.seasons}
                      {"   "}
                      {content.seasons > 0 ? "Seasons" : "Season"}
                    </span>
                  </>
                )}
              </span>
              <span className="hd">HD</span>
            </div>
            <p>
              {content.about.length > 150
                ? content.about.slice(0, 150) + "..."
                : content.about}
            </p>
            <div className="btns">
              <button onClick={hanlePlay}>
                <Play size={16} color="#fff" weight="fill" />
                <span>Play</span>
              </button>
              <button
                onClick={handleClick}
                className={isInMyList ? "fill-background" : ""}
              >
                {isInMyList ? (
                  <Check size={20} color="#141414" />
                ) : (
                  <Plus size={16} color="#fff" />
                )}
                <span>My List</span>
              </button>
              <button>
                <ThumbsUp size={20} color="#fff" />
              </button>
            </div>
            {content.cast && (
              <div className="cast">
                <span> Starring:</span>
                {content.cast.map((l, i) => {
                  return (
                    <Fragment key={l + i}>
                      <span key={content.id + l}>{l}</span>
                      {i === 2 ? "" : ","}
                    </Fragment>
                  );
                })}
              </div>
            )}
            {content.genre && (
              <div className="genre">
                <span> Genres:</span>
                {content.genre.map((l, i) => {
                  return (
                    <Fragment key={l + i}>
                      <span key={content.id + l}>{l}</span>
                      {i === content.genre.length - 1 ? "" : ","}
                    </Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {content && !content.isMovie && (
        <section className="episodes-sec">
          <div className="episodes">
            <h3>Season 1</h3>
            {rows.length > 0
              ? rows.map((e) => {
                  return (
                    <div className="epi" key={e}>
                      <div>
                        <img src={content.portaitImage} alt="" />
                      </div>
                      <div>Episode {e}</div>
                    </div>
                  );
                })
              : null}
          </div>
        </section>
      )}
    </div>
  );
};
export default OneItemPage;
