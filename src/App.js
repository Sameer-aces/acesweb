import React, { Component } from "react";
import { Routes, Route, Switch, Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard";
import Notification from "./components/Dashboard/notification";
import Home from "./components/home";
import PrivateRoutes from "./privateRoute";
const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notification" element={<Notification />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
