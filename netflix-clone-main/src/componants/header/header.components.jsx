import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../../assets/imgs/logo/net.png";
import { MagnifyingGlass, Gift, Bell, CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../provider/dataProvider.componant";

const Header = (props) => {
  let { onOut, user } = useContext(DataContext);
  let [params, setParams] = useSearchParams();
  let [searchBtn, setSearchBtn] = useState(false);
  // let [offsetScrolling, setOffsetScrolling] = useState(window.pageYOffset);
  const getTheQuery = params.get("query") || "";
  let [backColor, setBackColor] = useState(false);
  let navigate = useNavigate();
  // Changing header background color based on scrolling
  // useEffect(() => {
  //   if (
  //     !window.location.pathname.includes("/login") &&
  //     !window.location.pathname.includes("/play")
  //   ) {
  //     if (offsetScrolling > 0) {
  //       setBackColor(true);
  //       // document.querySelector(".header").style.backgroundColor = "";
  //     } else {
  //       setBackColor(false);
  //     }
  //   }
  // }, [offsetScrolling]);

  // window.onscroll = () => {
  //   setOffsetScrolling(window.pageYOffset);
  // };

  useEffect(() => {
    if (getTheQuery === "" && !props.query) {
      setSearchBtn(false);
      // navigate(oldPath);
    }
  }, [props.query]);

  const Handler = (e) => {
    let newParams = new URLSearchParams(params);
    if (e.target.value) {
      newParams.set("query", e.currentTarget.value);
    } else {
      newParams.delete("query");
    }
    setParams(newParams);
  };
  const handleLogOut = () => {
    console.log("HII");
    onOut(null);
  };
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);
  useEffect(() => {}, [getTheQuery]);
  return (
    <div className={backColor ? "header colored-back" : "header"}>
      <div className="left-nav">
        <div className="pic-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="tabs">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/recently">Recently Added</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <div className={`search-input ${searchBtn ? "after" : "before-click"}`}>
          {searchBtn && (
            <input
              value={params.get("query") || ""}
              type="search"
              className={`searchQueries ${searchBtn ? "" : "before-click"}`}
              id=""
              name="search"
              onChange={Handler}
              placeholder="Titles, People, categories"
            />
          )}

          <MagnifyingGlass
            className={`search-icon ${searchBtn ? "after-click" : ""}`}
            size={23}
            color="#e7eaee"
            onClick={() => {
              setSearchBtn(true);
            }}
          />
        </div>
        <div className="icons">
          <Bell size={23} color="#e7eaee" weight="fill" />
          <button className="logOut" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
