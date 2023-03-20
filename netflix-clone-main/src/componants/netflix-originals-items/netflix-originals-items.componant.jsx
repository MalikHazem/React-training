import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo/n.png";
import { useContext } from "react";
import { DataContext } from "../provider/dataProvider.componant";
import "./netflix-original.css";

const NetflixOriginalsItems = (props) => {
  let navigate = useNavigate();
  let { setshowID } = useContext(DataContext);

  const hanlePlay = () => {
    navigate(`/play/${props.e.id}`);
  };
  const handleClick = () => {
    setshowID(props.e.id);
    hanlePlay();
  };

  return (
    <Link
      to={props.e.isMovie ? `/movies/${props.e.id}` : `/series/${props.e.id}`}
    >
      <div className="lists-trend originals" onClick={handleClick}>
        <img src={logo} className="netflix-logo-position" />
        <img src={props.e.portaitImage} className="portrait-img" />
        <span className="show-name title">{props.e.name}</span>
      </div>
    </Link>
  );
};

export default NetflixOriginalsItems;
