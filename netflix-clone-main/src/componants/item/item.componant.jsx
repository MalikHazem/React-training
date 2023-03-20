import { CaretDown, Check, Circle, Play, Plus, ThumbsUp } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import vid from "../../assets/imgs/videos/Goblin.mp4";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo/n.png";
import { useContext } from "react";
import { DataContext } from "../provider/dataProvider.componant";
import OneItemVid from "../one-item-video/one-item-vid.componant";
import ItemVideo from "../one-item-video/one-item-vid.componant";
const Item = (props) => {
  let navigate = useNavigate();
  let { setshowID, setUser, user } = useContext(DataContext);
  const [isInMyList, setIsInMyList] = useState(
    user.myList.includes(props.e.id)
  );
  // let user = localStorage.getItem("userIn");

  let [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };
  const handleClick = () => {
    setshowID(props.e.id);
  };
  const handleClickAdd = () => {
    setIsInMyList(!isInMyList);
  };

  useEffect(() => {
    if (!isInMyList && user.myList.includes(props.e.id)) {
      const newList = user.myList.filter((e) => {
        return e !== props.e.id;
      });
      const newUser = { ...user, myList: newList };
      setUser(newUser);
    } else if (isInMyList) {
      if (user !== null && !user.myList.includes(props.e.id)) {
        let newList = [...user.myList, props.e.id];
        const newUser = { ...user, myList: newList };
        setUser(newUser);
      }
    }
  }, [isInMyList]);

  useEffect(() => {
    if (user.myList.includes(props.e.id)) {
      setIsInMyList(true);
    } else {
      setIsInMyList(false);
    }
  }, [user]);

  const hanlePlay = () => {
    navigate(`/play/${props.e.id}`);
  };
  return (
    <div
      className="lists-trend"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {props.e.isNetflixSeries ? (
        <img src={logo} className="netflix-logo-position" />
      ) : null}
      <img src={props.e.landscapeImg} />
      <span className="show-name title">{props.e.name}</span>
      {hovered && (
        <div className="hover-info">
          <div className="vid">
            <ItemVideo id={props.e.id} />
          </div>

          <div className="btns-hover">
            <div className="left">
              <button className="play-btn" onClick={hanlePlay}>
                <Play size={15} color="#000" weight="fill" />
              </button>
              <button
                onClick={handleClickAdd}
                className={isInMyList ? "fill-background" : ""}
              >
                {isInMyList ? (
                  <Check size={20} color="#141414" />
                ) : (
                  <Plus size={15} color="#fff" />
                )}
              </button>
              <button>
                <ThumbsUp size={15} color="#fff" />
              </button>
            </div>
            <div className="right">
              <Link
                to={
                  props.e.isMovie
                    ? `/movies/${props.e.id}`
                    : `/series/${props.e.id}`
                }
              >
                <button>
                  <CaretDown size={15} color="#fff" onClick={handleClick} />
                </button>
              </Link>
            </div>
          </div>
          <div className="show-info">
            <span className="match">97% Match</span>
            <span className="age">13+</span>
            <span className="duration">
              {props.e.isMovie ? (
                <>{props.e.Duration}</>
              ) : (
                <>
                  {props.e.seasons} {props.e.seasons > 1 ? "Seasons" : "Season"}
                </>
              )}
            </span>
            <span className="hd">HD</span>
          </div>
          <div className="type-genre">
            {props.e.genre.map((el, i) => {
              return (
                <Fragment key={i}>
                  <li>{el}</li>

                  {i !== props.e.genre.length - 1 && (
                    <Circle size={5} color="#393838" weight="fill" />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
