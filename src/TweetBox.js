import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase.js";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Kashif Ali",
      username: "cleaverProgrming",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://yt3.ggpht.com/yti/ANoDKi6wAT4Dsm0xV1sOMpJlYDY4GNcWOUPVU246j4VxyA=s88-c-k-c0x00ffffff-no-rj-mo",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="Kashif Ali"
            src="https://yt3.ggpht.com/yti/ANoDKi6wAT4Dsm0xV1sOMpJlYDY4GNcWOUPVU246j4VxyA=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <input
            type="text"
            placeholder="What Happens"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter Image"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
