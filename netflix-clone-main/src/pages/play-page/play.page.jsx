import { useEffect, useState } from "react";
import TheWitcherNetflix from "../../assets/imgs/videos/TheWitcherNetflix.mp4";
import goblin from "../../assets/imgs/videos/Goblin.mp4";
import jumanji from "../../assets/imgs/videos/JUMANJI.mp4";
import Lupin from "../../assets/imgs/videos/Lupin.mp4";
import ManVsBee from "../../assets/imgs/videos/ManVsBee.mp4";
import Slumberland from "../../assets/imgs/videos/Slumberland.mp4";
import WitcherNightmareoftheWolf from "../../assets/imgs/videos/The WitcherNightmareoftheWolf.mp4";
import THEQUEENGAMBIT from "../../assets/imgs/videos/THEQUEENGAMBIT.mp4";
import TheWitcherBloodOrigin from "../../assets/imgs/videos/TheWitcherBloodOrigin.mp4";
import "./play.css";
import { ArrowLeft } from "phosphor-react";
const PlayPage = (props) => {
  const [id, setId] = useState(
    parseInt(
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ]
    )
  );
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
    const video = videosArr[id];
    if (video !== "") {
      setVideo(video);
    } else {
      setVideo(ManVsBee);
    }
  }, []);
  return (
    <section className="play-area">
      <button className="go-back" onClick={() => window.history.back()}>
        <ArrowLeft size={32} color="#c9c9c9" weight="bold" />
      </button>
      {video && <video src={video} controls></video>}
    </section>
  );
};

export default PlayPage;
