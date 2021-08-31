import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
      />
    </div>
  );
}
