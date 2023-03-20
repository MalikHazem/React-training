import { useEffect, useState } from "react";
import "./topfive.css";
const TopFiveSeries = (props) => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    if (props.series.length > 0) {
      props.series.sort((one, two) =>
        one.rate > two.rate ? -1 : two.rate > one.rate ? 1 : 0
      );
      const theTop = props.series.slice(0, 5);
      setTop(theTop);
    }
  }, []);

  return (
    <>
      {top.length !== 0 &&
        top.map((e, i) => {
          return (
            <div className={`lists-trend ${props.top ? "topfive":""}`} key={e.id}>
              <span className="topfive-position">{i + 1}</span>
              <img src={e.landscapeImg} className="topfive-position-img" />
            </div>
          );
        })}
    </>
  );
};
export default TopFiveSeries;










const portraitgenre = () =>{
    return (





    )
}
export default portraitgenre;