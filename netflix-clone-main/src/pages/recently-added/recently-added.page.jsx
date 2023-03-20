import List from "../../componants/lists/lists.compnant";
import Queens from "../../assets/imgs/videos/THEQUEENGAMBIT.mp4";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../componants/provider/dataProvider.componant";
import { movies, series } from "../../assets/data/data";
import Trending from "../../componants/Trending/Trending.componant";
import "./recent.css";
const RecentlyAdded = () => {
  const { moviesArr, seriesArr } = useContext(DataContext);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    let totalData = movies.concat(series);
    if (totalData.length > 0) {
      totalData.sort((one, two) =>
        one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
      );
      totalData = totalData.slice(0, 8);
      setRecent(totalData);
    }
  }, []);
  return (
    <div className="recent">
      {recent.length > 0 && (
        <>
          <Trending vid={Queens} bestRate={recent[6]} />
          <List />
        </>
      )}
    </div>
  );
};

export default RecentlyAdded;
