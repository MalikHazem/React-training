import React, { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movies, series } from "../../assets/data/data";
// import { data } from "../../assets/data/data";
export const DataContext = React.createContext({});

const fetchUser = () => {
  const temp = JSON.parse(localStorage.getItem("userIn"));
  return temp || null;
};
const DataProvider = (props) => {
  let [changedPath, setChangedPath] = useState(false);
  let [user, setUser] = useState(fetchUser());
  const [seriesArr, setSeries] = useState([]);
  const [moviesArr, setMovies] = useState([]);
  const [showID, setshowID] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (seriesArr.length > 0) {
      localStorage.setItem("seriesArr", JSON.stringify(seriesArr));
    }
  }, [seriesArr]);
  useEffect(() => {
    if (moviesArr.length > 0) {
      localStorage.setItem("moviesArr", JSON.stringify(moviesArr));
    }
  }, [moviesArr]);
  useEffect(() => {
    fetch("https://netflixproject-series.free.beeceptor.com/series")
      .then((res) => {
        if (res.status === 429) {
          return null;
        } else {
          return res.json();
        }
      })
      .then((data) => setSeries(data || series))
      .catch((error) => Error("server is off"));
    // fetch("https://netflixproject-series.free.beeceptor.com/movies")
    //   .then((res) => {
    //     if (res.status === 429) {
    //       return null;
    //     } else {
    //       return res.json();
    //     }
    //   })
    //   .then((data) => setMovies(data || movies))
    //   .catch((error) => Error("server is off"));
    setSeries(series);
    setMovies(movies);
    readLogUser();
  }, []);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem("userIn", JSON.stringify(user));
    }
  }, [user]);

  const onOut = (u) => {
    setUser(u);
    localStorage.removeItem("moviesArr");
    localStorage.removeItem("seriesArr");
    localStorage.removeItem("userIn");
    navigate("/login");
  };
  // Putting user in the local storage
  const readLogUser = () => {
    const savedUser = localStorage.getItem("userIn");
    if (savedUser !== null) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  };
  //login function
  const handleLogIn = (user) => {
    setUser(user);
    // localStorage.setItem("userIn", JSON.stringify(user));
  };
  // handle showing header or not depending on the location
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);
  return (
    <DataContext.Provider
      value={{
        onOut,
        handleLogIn,
        user,
        setUser,
        seriesArr,
        moviesArr,
        showID,
        setshowID,
        setChangedPath,
        changedPath,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
