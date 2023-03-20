import "./App.css";
import Main from "./pages/main-page/main.page.jsx";
import { useEffect, useState } from "react";
import { movies, series } from "./assets/data/data";
import AddMov from "./componants/addMov/addMov.components";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "./componants/header/header.components";
import Footer from "./componants/footer/footer.components";
import TVShows from "./pages/series-page/tvshow.page";
import MoviesPage from "./pages/movie-page/movies.page";
import OneItemPage from "./pages/one-item-page/one-item.page";
import LogIn from "./pages/log-in/log-in.page";
import Admin from "./pages/admin-page/admin.page";
import MyList from "./pages/myList/mylist.page";
import SearchPage from "./pages/search-page/search.page";
import DataProvider, {
  DataContext,
} from "./componants/provider/dataProvider.componant";
import { useContext } from "react";
import PlayPage from "./pages/play-page/play.page";
import RecentlyAdded from "./pages/recently-added/recently-added.page";

function App() {
  let navigate = useNavigate();
  const { user } = useContext(DataContext);
  let [inUser, setUser] = useState(user);
  const [query, setQuery] = useState(false);
  let [params, setParams] = useSearchParams();
  const getTheQuery = params.get("query") || "";
  // let { seriesArr, moviesArr } = useContext(DataContext);
  let [pagePathname, setPagePathname] = useState(window.location.pathname);

  // Changes to the search input depending on the query and timing
  useEffect(() => {
    let handleQuestionTime = setTimeout(() => {
      if (getTheQuery === "") {
        setQuery(false);
      }
    }, [5000]);
    if (getTheQuery !== "") {
      setQuery(true);
    }
    return () => {
      clearTimeout(handleQuestionTime);
      setQuery(false);
    };
  }, [getTheQuery]);
  useEffect(() => {
    setQuery(false);
    setPagePathname(window.location.pathname);
  }, [window.location.pathname]);
  // handle showing header or not depending on the location
  useEffect(() => {
    if (inUser === null) {
      navigate("/login");
      setPagePathname("/login");
      localStorage.removeItem("moviesArr");
      localStorage.removeItem("seriesArr");
    } else {
      setPagePathname(window.location.pathname);
    }
  }, [inUser]);
  // add user the moment the project opens
  useEffect(() => {
    setQuery(false);
  }, []);

  return (
    <div className="App">
      <DataProvider>
        {pagePathname !== "/login" && !pagePathname.includes("/play") && (
          <Header query={query} setQuery={setQuery} />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          {<Route path="/add" element={<AddMov />}></Route>}
          <Route path="/login" element={<LogIn />} />
          {!query && <Route path="/home" element={<Main />} />}
          {!query && <Route path="/tvshows" element={<TVShows />} />}
          {!query && <Route path="/movies" element={<MoviesPage />} />}
          {!query && <Route path="/recently" element={<RecentlyAdded />} />}
          {!query && <Route path="/movies/:id" element={<OneItemPage />} />}
          {!query && <Route path="/series/:id" element={<OneItemPage />} />}
          {!query && <Route path="/mylist" element={<MyList />} />}
          <Route path="/play/:id" element={<PlayPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {query && <SearchPage setQuery={setQuery} query={query} />}
        {!query && !pagePathname.includes("/play") && <Footer />}
      </DataProvider>
    </div>
  );
}

export default App;
