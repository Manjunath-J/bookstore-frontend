import React, { useState } from "react";
import book from "../assets/2766594@2x.png";
import "../styles/Firstpage.scss";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import { createUser, login } from "../utils/HttpService";


const Firstpage = (props) => {

  const { onClose, selectedValue, open } = props;

  const navigate = useNavigate();

  const [sign, setSign] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobNumber] = useState("");

  const handleSignup = async (ele) => {
    ele.preventDefault();
    try {
      const response = await createUser("users/", {
        fullName,
        email,
        password,
        mobileNumber
      });
      if(response){
        setSign("signin")
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async (ele) => {
    ele.preventDefault();
    try {
      await login("users/signin  ", {
        email,
        password,
      });
      handleClose()
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleClose = () => {
    onClose(selectedValue);
  };


  const handleNavigate = () => {
    navigate("/home");
  };

  

  const handleOpertaion = (opertaion) => {
    setSign(opertaion);
  };

  let option = true;

  if (sign === "signin") option = true;
  else if (sign === "signup") option = false;

  return (
    <div>
      <Dialog onClose={handleClose} open={open} sx={{width:"100%"}}>
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
                  <input type="text" placeholder="email" className="inp" onChange={(ele) => {
                  setEmail(ele.target.value);
                }}/>
                </div>
                <div className="pwd-div">
                  <span className="txt">Password</span>
                  <input type="password" placeholder="password" className="inp" onChange={(ele) => {
                  setPassword(ele.target.value);
                }}/>
                  <span className="forgot-txt">Forgot Password ?</span>
                </div>
                <div className="btn-sigin">
                <div className="l-div">
                  <button className="login-btn" onClick={handleLogin}>Login</button>
                </div>
                <div className="or-div">
                  <span className="or">OR</span>
                </div>
                <div className="f-b-btn">
                  <button className="f-btn">Facebook</button>
                  <button className="b-btn">Google</button>
                </div>
                </div>
              </div>
            ) : (
              <div className="signup-div">
                <div className="su">
                  <span className="su-txt">Full Name</span>
                  <input type="text" className="su-input"  onChange={(ele) => {
                  setFullName(ele.target.value);
                }}/>
                </div>
                <div className="su">
                  <span className="su-txt">Email Id</span>
                  <input type="text" className="su-input" onChange={(ele) => {
                  setEmail(ele.target.value);
                }}/>
                </div>
                <div className="su">
                  <span className="su-txt">Password</span>
                  <input type="password" className="su-input" onChange={(ele) => {
                  setPassword(ele.target.value);
                }}/>
                </div>
                <div className="su">
                  <span className="su-txt" >Mobile Number</span>
                  <input type="tel" className="su-input" pattern="[0-9]{10}"required onChange={(ele) => {
                  setMobNumber(ele.target.value);
                }}/>
                </div>
                <div className="su-1">
                  <button className="su-btn" onClick={handleSignup}>SIGNUP</button>
                </div>
              </div>
            )}
          </div>
        </div>
    </Dialog>
    </div>
  );
};

export default Firstpage;
