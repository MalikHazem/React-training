// import witcherVid from "../../assets/imgs/videos/TheWitcherNetflix.mp4";
import { useState } from "react";
import { useEffect } from "react";

const Vid = (props) => {
  let [place, setPlace] = useState(window.pageYOffset);
  useEffect(() => {
    let timehandler = setTimeout(() => {
      props.setShowVideo(true);
    }, 4000);
    let timeStophandler = setTimeout(() => {
      props.setShowVideo(false);
    }, 5000);
    return () => {
      clearTimeout(timehandler);
      clearTimeout(timeStophandler);
    };
  }, [place]);
  window.onscroll = () => {
    setPlace(place);
    if (window.pageYOffset < 200) {
      props.setShowVideo(true);
    } else {
      props.setShowVideo(false);
    }
  };

  return (
    <>
      {props.showVideo && (
        <video type="video/mp4" src={props.vid} autoPlay muted></video>
      )}
    </>
  );
};
export default Vid;
