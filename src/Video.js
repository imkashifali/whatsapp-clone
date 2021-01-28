import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const OnVideoPress = () => {
    videoRef.current.play();
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
        ref={videoRef}
        onClick={OnVideoPress}
        src="https://v16m.tiktokcdn.com/dae3950ac55218621d69699b8fa1dd9f/60132cef/video/tos/alisg/tos-alisg-pve-0037c001/dca27f35799e4c95bfba6a1b46a95063/?a=1233&br=5618&bt=2809&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101281530080101151531630217E92F&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M291O215ZThseDMzOjczM0ApPDlkOmc3NDs6NzRlZ2Y4ZmcvX3JyZ2xtXmhfLS1jMTRzc2ItM2MxL2M0Yi01NjQ0YDQ6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
