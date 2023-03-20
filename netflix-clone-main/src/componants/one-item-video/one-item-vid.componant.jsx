import { useEffect, useState } from "react";
import goblin from "../../assets/imgs/videos/Goblin.mp4";
import jumanji from "../../assets/imgs/videos/JUMANJI.mp4";
import Lupin from "../../assets/imgs/videos/Lupin.mp4";
import ManVsBee from "../../assets/imgs/videos/ManVsBee.mp4";
import Slumberland from "../../assets/imgs/videos/Slumberland.mp4";
import WitcherNightmareoftheWolf from "../../assets/imgs/videos/The WitcherNightmareoftheWolf.mp4";
import THEQUEENGAMBIT from "../../assets/imgs/videos/THEQUEENGAMBIT.mp4";
import TheWitcherBloodOrigin from "../../assets/imgs/videos/TheWitcherBloodOrigin.mp4";
import TheWitcherNetflix from "../../assets/imgs/videos/TheWitcherNetflix.mp4";

const ItemVideo = (props) => {
  const [video, setVideo] = useState();
  const videosArr = [
    "",
    TheWitcherBloodOrigin,
    "",
    THEQUEENGAMBIT,
    "",
    goblin,
    "",
    TheWitcherNetflix,
    "",
    Lupin,
    ManVsBee,
    "",
    "",
    "",
    "",
    jumanji,
    WitcherNightmareoftheWolf,
    Slumberland,
  ];
  useEffect(() => {
    const video = videosArr[props.id];
    if (video !== "") {
      setVideo(video);
    } else {
      setVideo(ManVsBee);
    }
  }, []);
  return (
    <>
      {/* video */}
      <video src={video} autoPlay muted></video>
    </>
  );
};
export default ItemVideo;
