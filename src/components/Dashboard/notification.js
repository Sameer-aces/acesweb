import axios from "axios";
import React, { Component, useState } from "react";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

import Modal from "react-modal";

const Notification = () => {
  const [notifyModal, setNotifyModal] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send notifiction");
    const notification = {
      appId: 15368,
      appToken: "ux61qbAfMOOHd6vFroOD7i",
      title: title,
      body: body,
      dateSent: new Date().toLocaleString(),
    };
    axios
      .post("https://app.nativenotify.com/api/notification", notification)
      .then((res) => console.log(res));
    setNotifyModal(false);
  };
  const closeModal = () => {
    console.log("close");
    setNotifyModal(false);
  };
  const sendNotification = () => {
    console.log("sss");
    setNotifyModal(true);
  };
  const getNotifications = () => {
    console.log("getNotification");
  };
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
          <button onClick={sendNotification} className="button">
            Notification
          </button>
          <button onClick={getNotifications}>button</button>
        </div>
      </div>
      <Modal
        isOpen={notifyModal}
        className="modalStyles"
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="modalTitle">
          <h4 className="modalHeader">Notification</h4>
          <button className="modalButton" onClick={closeModal}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="formInput"
            placeholder="title"
            style={{ width: "90%", margin: "10px", height: "40px" }}
          />
          <input
            onChange={(e) => setBody(e.target.value)}
            placeholder="Message"
            style={{ width: "90%", margin: "10px", height: "40px" }}
            className="formInput"
          />
          <button className="button">Send notification</button>
        </form>
      </Modal>
    </>
  );
};
export default Notification;
