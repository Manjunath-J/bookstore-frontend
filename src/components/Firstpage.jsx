import React, { useState } from "react";
import book from "../assets/2766594@2x.png";
import "../styles/Firstpage.scss";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  const [sign, setSign] = useState("");

  const handleOpertaion = (opertaion) => {
    setSign(opertaion);
  };

  let option = true;

  if (sign === "signin") option = true;
  else if (sign === "signup") option = false;

  return (
    <div className="main">
      <div className="main-div">
        <div className="bg-div">
          <div className="inside" onClick={handleNavigate}>
            <div className="img-div">
              <img src={book} className="book-shop" alt="Online Shopping" />
            </div>
            <div className="text">
              <h1 className="h">ONLINE BOOK SHOPPING</h1>
            </div>
          </div>
        </div>
        <div className="front-div">
          <div className="front-head">
            <h1 className="heading" onClick={() => handleOpertaion("signin")}>
              LOGIN
            </h1>
            <h1 className="heading" onClick={() => handleOpertaion("signup")}>
              SIGNUP
            </h1>
          </div>
          {option ? (
            <div className="signin-div">
              <div className="mail-div">
                <span className="txt">Email Id</span>
                <input type="text" placeholder="email" className="inp" />
              </div>
              <div className="pwd-div">
                <span className="txt">Password</span>
                <input type="text" placeholder="password" className="inp" />
                <span className="forgot-txt">Forgot Password ?</span>
              </div>
              <div className="l-div">
                <button className="login-btn">Login</button>
              </div>
              <div className="or-div">
                <span className="or">OR</span>
              </div>
              <div className="f-b-btn">
                <button className="f-btn">Facebook</button>
                <button className="b-btn">Google</button>
              </div>
            </div>
          ) : (
            <div className="signup-div">
              <div className="su">
                <span className="su-txt">Full Name</span>
                <input type="text" className="su-input" />
              </div>
              <div className="su">
                <span className="su-txt">Email Id</span>
                <input type="text" className="su-input" />
              </div>
              <div className="su">
                <span className="su-txt">Password</span>
                <input type="text" className="su-input" />
              </div>
              <div className="su">
                <span className="su-txt">Mobile Number</span>
                <input type="text" className="su-input" />
              </div>
              <div className="su-1">
                <button className="su-btn">SIGNUP</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
