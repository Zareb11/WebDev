import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/gradient-summer-background-videocalls_52683-61337.jpg?size=626&ext=jpg&ga=GA1.2.1935130400.1630800000"
          alt=""
        />
        <Avatar className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h2>{user.email}</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you.</p>
          <p className="sidebar__statNumber">2,567</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post.</p>
          <p className="sidebar__statNumber">1,567</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
