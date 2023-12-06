import axios from "axios";
import React, { Component, useContext } from "react";
import { GlobalContext } from "../../GlobalProvider";
const otpVerify = () => {
  const { email } = useContext(GlobalContext);
  const handleSubmitOtp = () => {
    axios
      .post("https://aces-hackathon.onrender.com/api/verifyAdminlogin", otp)
      .then((response) => {
        setVerifyOtp(response.data.otp);
        setBtn(false);
        setError("");
      })
      .catch((response) => {
        setError(response.response.data);
      });
  };
  return (
    <>
      <h1>otp verify</h1>
      <div className="home-page">
        <div className="OtpLeftSide">
          <a href="https://www.aces-co.com/" rel="noreferrer" target="_blank">
            <img className="logo" src={Acealyze} alt="logo-img" />
          </a>
        </div>
        <div className="OtpRightSide">
          <div className="OtpPage">
            <div className="">
              <h4 style={{ marginLeft: "-160px" }}>
                <b>Otp</b>
              </h4>
            </div>
            <p
              style={{
                width: "4.5%",
                height: "3.25px",
                marginLeft: "-297px",
                marginTop: "5px",
                border: "1px solid #E50035",
                backgroundColor: "#E50035",
              }}
            ></p>
            <div className="">
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: "20px",
                  fontSize: "10px",
                }}
              >
                We have send you a One Time Password(OTP) to your email
              </p>
              <br></br>
              <input onChange={(e) => setOtp(e.target.value)} />
            </div>
            <p>
              {error && (
                <>
                  <small style={{ color: "red" }}>{error}</small>
                </>
              )}
            </p>
            <div style={{ marginTop: "10px" }}>
              <button
                className="formBtn"
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#1A73E8",
                  color: "white",
                  fontWeight: "400",
                }}
                onClick={handleSubmitOtp}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default otpVerify;
