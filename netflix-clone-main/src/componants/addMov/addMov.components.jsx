import "./addMov.css";
import add from "../../assets/imgs/add.jpg";
import logo from "../../assets/imgs/logo/net.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

const AddMov = () => {

  const onSelect =(selectedList, selectedItem)=>{
    setSel(selectedList);
    setGenre(selectedList);
  }
  const onRemove =(selectedList, removedItem)=>{
    setSel(selectedList);
    setGenre(selectedList);
  }
  const options = [
    'drama' ,
    'action' ,
    'romance',
    'history' ,
    'comedy' ,
    'crime' ,
  ]
  function handleChange(evt) {
    const value = evt.target.value;
    setCast({
      ...cast,
      [evt.target.name]: value
    });
  }
  const [Selected , setSel] = useState({});
  const [name, setTit] = useState("");
  const [genre, setGenre] = useState({});
  const [about, setIAbout] = useState("");
  const [Duration, setDur] = useState("");
  const [rate, setRate] = useState("");
  const [cast, setCast] = useState({
    firstName: "",
    secondName: "",
    thirdName:"",
  });
  const [portaitImage, setImg] = useState("");
  const [landscapeImg, setImg1] = useState("");
  const [localMov, setMov] = useState(
    JSON.parse(localStorage.getItem("moviesArr")) || []
  );
  const navigate = useNavigate();
  function returnAdmin() {
    navigate("/admin");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      Duration: Duration,
      about: about,
      cast: Object.values(cast),
      genre: Object.values(genre),
      id: new Date(),
      isMove: true,
      isNetflixSerie: true,
      landscapeImg: landscapeImg,
      name: name,
      no: 1,
      portaitImage: portaitImage,
      rate: rate,
    };
    console.log(newItem);
    const newItems = [newItem, ...localMov];
    setMov(newItems);
    localStorage.setItem("moviesArr", JSON.stringify(newItems));
  };

  return (
    <div className="b">
      <div className="upper">
        <div className="wrapper">
          <div className="title">Create Movie</div>
          <div className="form">
            <div className="inputField">
              <label>Movie Name</label>
              <input
                type="text"
                value={name}
                className="input"
                onChange={(e) => { setTit(e.target.value);  }}
              />
            </div>
            <div className="inputField">
              <label>About Movie</label>
              <textarea
                type="text"
                value={about}
                className="input"
                onChange={(e) => {
                  setIAbout(e.target.value);
                }}
              />
            </div>
            <div className="multiSel">
              <label>Genre</label>
              <Multiselect  className="sel"
                options={options} 
                
                selectedValues={Selected}
                onSelect={onSelect}
                onRemove={onRemove}
                isObject={false}
                />
            </div>
            <div className="inputField">
              <label>Duration</label>
              <input
                value={Duration}
                type="text"
                className="input"
                onChange={(e) => {
                  setDur(e.target.value);
                }}
              />
            </div>
            <div className="inputField">
              <label>Rate</label>
              <input
                value={rate}
                type="text"
                className="input"
                onChange={(e) => {
                  setRate(e.target.value);
                }}
              />
            </div>
            <div className="inputFieldCast">
              <label>Cast</label>
              <div className="Cast">
              <input
                value={cast.firstName}
                type="text"
                className="inputCast"
                name="firstName"
                onChange={handleChange}
                
              />
               <input
                value={cast.secondName}
                type="text"
                name="secondName"
                className="inputCast"
                onChange={handleChange}  
              />
              <input
                value={cast.thirdName}
                type="text"
                name="thirdName"
                className="inputCast"
                onChange={handleChange}
                 
              />
            </div>
            </div>
            <div className="inputField">
              <label>portaitImage</label>
              <input
                value={portaitImage}
                type="text"
                className="input"
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>
            <div className="inputField">
              <label>landscapeImg</label>
              <input
                value={landscapeImg}
                type="text"
                className="input"
                onChange={(e) => {
                  setImg1(e.target.value);
                }}
              />
            </div>
            <div className="inputField">
              <input
                type="submit"
                value="Add Movie"
                className="btn"
                onClick={handleSubmit}
              />
              <input
                type="submit"
                value="Cancel"
                className="btn"
                onClick={returnAdmin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMov;
