import { CaretDown, Circle, Play, Plus, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import vid from "../../assets/imgs/videos/Goblin.mp4";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo/n.png";
import "./select.css";
const SelectedShow = (props) => {
  return (
    // <Link to={`/series/${props.e.id}`}>
    <div className="selected">
      {/* {props.e.isNetflixSeries ? (
        <img src={logo} className="netflix-logo-position" />
      ) : null}
      <img src={props.e.landscapeImg} /> */}

      <div className="hover-info">
        <div className="vid">
          <video src={vid} muted autoPlay></video>
        </div>
        {/*
          <div className="btns-hover">
            <div className="left">
              <button className="play-btn">
                <Play size={15} color="#000" weight="fill" />
              </button>
              <button>
                <Plus size={15} color="#fff" />
              </button>
              <button>
                <ThumbsUp size={15} color="#fff" />
              </button>
            </div>
            <div className="right">
              <button>
                <CaretDown size={15} color="#fff" />
              </button>
            </div>
            <div></div>
          </div>
          <div className="show-info">
            <span className="match">97% Match</span>
            <span className="age">13+</span>
            <span className="duration">
              {props.e.seasons} {props.e.seasons > 1 ? "Seasons" : "Season"}
            </span>
            <span className="hd">HD</span>
          </div>
          <div className="type-genre">
            {props.e.genre.map((el, i) => {
              return (
                <>
                  <li>{el}</li>

                  <Circle size={5} color="#393838" weight="fill" />
                </>
              );
            })}
          </div>*/}
      </div>
    </div>
    // </Link>
  );
};

export default SelectedShow;
