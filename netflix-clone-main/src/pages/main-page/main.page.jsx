import List from "../../componants/lists/lists.compnant";
import Trending from "../../componants/Trending/Trending.componant";
import witcherVid from "../../assets/imgs/videos/TheWitcherNetflix.mp4";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../componants/provider/dataProvider.componant";
import { series } from "../../assets/data/data";
const Main = () => {
  const { seriesArr } = useContext(DataContext);
  const [bestRate, setBestRate] = useState({});

  useEffect(() => {
    if (series.length > 0) {
      series.sort((one, two) =>
        one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
      );
      setBestRate(series[0]);
    }
  }, []);
  return (
    <div>
      <Trending
        vid={witcherVid}
        videoPoster={bestRate.landscapeImg}
        bestRate={bestRate}
      />

      {seriesArr.length > 0 && <List />}
    </div>
  );
};
export default Main;
