import React from "react";
import book from "../assets/2766594@2x.png";
import "../styles/Firstpage.scss";

const Firstpage = () => {
  return (
    <div className="main">
      <div className="main-div">
        <div className="bg-div">
          <div className="inside">
          <div className="img-div">
            <img src={book} className="book-shop" alt="Online Shopping" />
          </div>
          <div className="text">
            <h1 className="h">ONLINE BOOK SHOPPING</h1>
          </div>
          </div>
        </div>
        <div className="front-div">
        <div className="head">
            <h1 className="heading">LOGIN</h1>
            <h1 className="heading">SIGNUP</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Firstpage;
