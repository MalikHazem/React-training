import List from "../../componants/lists/lists.compnant";
import slumberland from "../../assets/imgs/videos/Slumberland.mp4";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../componants/provider/dataProvider.componant";
import { movies } from "../../assets/data/data";
import Trending from "../../componants/Trending/Trending.componant";
import "./moviepage.css";
const MoviesPage = () => {
  const { moviesArr } = useContext(DataContext);
  const [bestRate, setBestRate] = useState({});

  useEffect(() => {
    if (movies.length > 0) {
      movies.sort((one, two) =>
        one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
      );
      setBestRate(movies[0]);
    }
  }, []);
  return (
    <div className="movie">
      <Trending
        vid={slumberland}
        videoPoster={bestRate.landscapeImg}
        bestRate={bestRate}
      />

      {moviesArr.length > 0 && <List />}
    </div>
  );
};
export default MoviesPage;
