import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import db from "./firebase.js";
import { useStateValue } from "./StateProvider.js";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          {/* <Avatar src="https://yt3.ggpht.com/yti/ANoDKi6wAT4Dsm0xV1sOMpJlYDY4GNcWOUPVU246j4VxyA=s88-c-k-c0x00ffffff-no-rj-mo" /> */}
          <Avatar src={user?.photoURL} />
        </IconButton>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start New chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
