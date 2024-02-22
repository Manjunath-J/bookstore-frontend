import React from "react";
import "../styles/OrderCard.scss";
import photo from "../assets/book.jpg";


const OrderCard = () => {
  return (
    <div className="o-card">
      <div className="o-p-div">
        <img src={photo} alt="book" className="o-img" />
      </div>
      <div className="o-b-div">
        <div className="o-b-details">
          <span className="o-b-name">book name</span>
          <span className="o-b-auth">by author</span>
        </div>
        <div className="o-b-price">
          <span className="o-p">
            Rs.100 <del className="o-del">Rs.200</del>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
