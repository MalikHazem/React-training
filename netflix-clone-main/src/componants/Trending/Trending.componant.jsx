import { useContext, useEffect, useState } from "react";
import { Plus, Play, Check } from "phosphor-react";
import "./trending.css";
import netflixLogo from "../../assets/imgs/logo/n.png";
import Vid from "../video/vid.componant";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../provider/dataProvider.componant";
import Popular from "../populor/popular.componant";

const Trending = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  let navigate = useNavigate();
  let { setUser, user } = useContext(DataContext);
  const [change, setChange] = useState(false);

  const [isInMyList, setIsInMyList] = useState(
    user.myList.includes(props.bestRate.id)
  );

  const hanlePlay = () => {
    navigate(`/play/${props.bestRate.id}`);
  };
  const handleClickAdd = () => {
    setIsInMyList(!isInMyList);
  };
  useEffect(() => {
    if (change) {
      if (!isInMyList && user.myList.includes(props.bestRate.id)) {
        const newList = user.myList.filter((e) => {
          return e !== props.bestRate.id;
        });
        const newUser = { ...user, myList: newList };
        setUser(newUser);
      } else if (isInMyList) {
        if (user !== null && !user.myList.includes(props.bestRate.id)) {
          let newList = [...user.myList, props.bestRate.id];
          const newUser = { ...user, myList: newList };
          setUser(newUser);
        }
      }
      setChange(false);
    }
  }, [isInMyList]);
  useEffect(() => {
    if (props.bestRate.id) {
      if (user.myList.includes(props.bestRate.id)) {
        setIsInMyList(true);
      } else {
        setIsInMyList(false);
      }
    }
  }, [user, props.bestRate.id]);
  return (
    <section className="bestRateSection">
      {/* Video */}
      <Vid
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        vid={props.vid}
        videoPoster={props.videoPoster}
        name={props.bestRate.name}
      />
      {/* Video */}

      {!showVideo && props.bestRate.id && (
        <div className="bestRateInfo">
          {/* Logo */}
          <div className="netflixLogo">
            <img className="logo" src={netflixLogo} alt="logo" />
            <span>etflix</span>
          </div>
          <h1>{props.bestRate.name}</h1>
          <p>{props.bestRate.about}</p>
          <div className="btns">
            <button onClick={hanlePlay}>
              <Play size={16} color="#515151" weight="fill" />
              <span>Play</span>
            </button>
            <button
              onClick={() => {
                setChange(true);
                handleClickAdd();
              }}
              className={isInMyList ? "fill-background" : ""}
            >
              {isInMyList ? (
                <Check size={16} color="#141414" />
              ) : (
                <Plus size={16} color="#fff" />
              )}

              {/* <Plus size={16} /> */}
              <span>My List</span>
            </button>
          </div>
          <Popular />
        </div>
      )}
    </section>
  );
};
export default Trending;
