import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setinputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setinputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Serach "
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Kashif Ali"
          src="https://yt3.ggpht.com/yti/ANoDKi6wAT4Dsm0xV1sOMpJlYDY4GNcWOUPVU246j4VxyA=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default Header;
