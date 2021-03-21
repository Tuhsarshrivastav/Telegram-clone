import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SidebarThread from "./SidebarThread";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import db from "./firebase";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [threads, setThreads] = useState([]);
  const addThread = () => {
    const threadName = prompt("Enter the thread name");
    db.collection("threads").add({
      threadName: threadName,
    });
  };

  useEffect(() => {
    db.collection("threads").onSnapshot((snapshot) => {
      setThreads(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sidebar__searchIcon" />
          <input placeholder="Search" className="sidebar__input" />
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorOutlinedIcon onClick={addThread} />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        {threads.map(({ id, data: { threadName } }) => (
          <SidebarThread key={id} id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar__bottom">
        <IconButton>
          <Avatar
            style={{ cursor: "pointer" }}
            src={user.photo}
            onClick={() => auth.signOut()}
          />
        </IconButton>
        <IconButton>
          <PhoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <QuestionAnswerOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
