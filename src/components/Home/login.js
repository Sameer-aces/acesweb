import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
  });
  const [verifyOtp, setVerifyOtp] = useState();
  const [otp, setOtp] = useState();
  const [btn, setBtn] = useState(true);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    const userData = {
      email: user.email,
    };
    var x = document.getElementById("otp");
    var y = document.getElementById("loginBtn");

    console.log(userData);
    axios.post("http://localhost:5000/api/login", userData).then((res) => {
      console.log(res.data.otp);
      setVerifyOtp(res.data.otp);
      setBtn(false);
      // if (x.style.display === "none") {
      //   x.style.display = "flex";
      //   // y.style.display = "flex";
      // } else {
      //   x.style.display = "none";
      //   // y.style.display = "none";
      // }
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };
  console.log(user);
  const handleVerifyChange = (e) => {
    console.log("handleVerifyChange");
    if (otp === verifyOtp) {
      console.log("verified");
      navigate("/dashboard");
    } else {
      alert("incorrect otp");
    }
  };
  return (
    <>
      <div className="LoginPage">
        <div className="">
          <h4
            style={{
              marginLeft: "-165px",
              fontWeight: "500",
            }}
          >
            Login
          </h4>
        </div>
        <form className="LoginForm" onSubmit={handleSubmit}>
          {btn ? (
            <input
              className="formInput"
              onChange={handleChange}
              value={user.email}
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          ) : (
            <input
              className="formInput"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              id="otp"
              type="number"
              placeholder="OTP"
            />
          )}

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {btn ? (
              <button
                className="formBtn"
                id="loginBtn"
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#1A73E8",
                  color: "white",
                  fontWeight: "400",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            ) : (
              <button
                id="verifyBtn"
                className="formBtn"
                onClick={handleVerifyChange}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
