import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const OnVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={OnVideoPress}
        ref={videoRef}
        // src="https://v77.tiktokcdn.com/e2c8d882e3ea5dbe684717f708094c99/60381506/video/tos/alisg/tos-alisg-pve-0037c001/7ef0a17eeb384e79bfaea876372abd9b/?a=1233&br=988&bt=494&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021022515220301011507909706160FCF&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M255bjd5M3dzMzMzOzczM0ApZzdoO2RmOmVlNzxmOTM2N2dtL2VuMDVmY29gLS01MTRzc2E2LzQ0MTUtNGMzMjE0MTY6Yw%3D%3D&vl=&vr="
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />.
    </div>
  );
};

export default Video;
