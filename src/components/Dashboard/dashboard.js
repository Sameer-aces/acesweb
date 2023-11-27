import React, { Component } from "react";
import Notification from "./notification";
import UsersData from "./usersData";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
const Dashboard = () => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/notification",
      name: "Notification",
    },
  ];

  return (
    <>
      <div className="MainDashboard">
        <div className="sideBar">
          <img
            src={logo}
            width={180}
            height={40}
            className="logo"
            alt="Aceslogo"
          />
          <div className="sidebarlinks">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="dashboardContent">
          <div>
            <UsersData />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
