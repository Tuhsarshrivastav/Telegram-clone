import React from "react";
import Sidebar from "./Sidebar";
import "./Telegram.css";
import Thread from "./Thread";
const Telegram = () => {
  return (
    <div className="telegram">
      <Sidebar />
      <Thread/>
    </div>
  );
};

export default Telegram;
