import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Category = (props) => {
  let [params, setParams] = useSearchParams();
  let [clicked, setClicked] = useState(false);

  const handleCategory = (ev) => {
    let criteria;
    setClicked(!clicked);
    if (clicked) {
      criteria = props.searchKey.filter((e) => {
        return e !== props.category;
      });
    } else {
      criteria = [...props.searchKey, props.category];
    }

    props.setSearchKey(criteria);
  };

  return (
    <>
      <button
        onClick={(event) => handleCategory(event)}
        className={clicked ? "colored" : ""}
      >
        {props.category}
      </button>
    </>
  );
};

export default Category;
