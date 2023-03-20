
import "./admin.css";
import { movies } from "../../assets/data/data.js";
import { series } from "../../assets/data/data.js";
import user from "../../assets/imgs/user.png";
import { Key } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Admin = (props) => {
  const [localMov, setMov]= useState(JSON.parse(localStorage.getItem("moviesArr")) || []);
  const[localSer, setSer] = useState(JSON.parse(localStorage.getItem("seriesArr")) || []);
  const BigArr = ([...localMov, ...localSer]);
  // console.log(localMov);
  const navigate = useNavigate();
  const addMovie =()=>{
    navigate("/add");
  }
  const handleRet = () => {
    navigate("/home");
  };

  const handleVisit = (id) => {
    navigate(`/movies/${id}`);
  };
  const handleDel=(id)=>{

    setMov(localMov?.filter(item => item.id !== id));
    setSer(localSer?.filter(item => item.id !== id));
  };
  return (
    <div className="mainDiv">
      <div className="head">
        <span className="manage">Manage Movies</span>
        <div className="headbtn">
          <button className="but1" onClick={addMovie}>Create Movie</button>
          <button className="but2" onClick={handleRet}>
            Home
          </button>
        </div>
        <div className="moviesCards">
          <span className="title">Movies and Series list</span>
          <div className="spans">
            <span className="hash">#</span>
            <span className="mTit">Movies Title</span>
            <span className="mGen">Genre</span>
            <span className="mOp">Operation</span>
          </div>
          {BigArr.map((item , index) => (
            <div className="card1" key={item.id}>
              <span className="no">{index+1}</span>
              <img className="movImg" src={item.portaitImage} alt="MovieImg" />
              <span className="tit">{item.name}</span>
              <span className="type">{item.genre+"  " } </span>
             
              <div className="actions1">
                <button className="bt1" onClick={()=>handleVisit(item.id)}>visit</button>
                <button className="bt2">edit</button>
                <button className="bt3" onClick={()=>handleDel(item.id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
