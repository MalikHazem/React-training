import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../provider/dataProvider.componant";
import "./search.css";
const SearchedItem = (props) => {
  let { setshowID } = useContext(DataContext);
  const handleClick = () => {
    setshowID(props.el.id);
  };
  return (
    <Link
      onClick={handleClick}
      to={
        props.el.isMovie ? `/movies/${props.el.id}` : `/series/${props.el.id}`
      }
    >
      <div className="card">
        <img src={props.el.landscapeImg} alt="" />
        <span className="show-name title">{props.el.name}</span>
      </div>
    </Link>
  );
};

export default SearchedItem;
