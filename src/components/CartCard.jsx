import React, { useState } from "react";
import "../styles/CartCard.scss";
import photo from "../assets/book.jpg";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="c-card">
      <div className="c-p-div">
        <img src={photo} alt="book" className="c-img" />
      </div>
      <div className="c-b-div">
        <div className="c-b-details">
          <span className="c-b-name">book name</span>
          <span className="c-b-auth">by author</span>
        </div>
        <div className="c-b-price">
          <span className="c-p">
            Rs.100 <del className="c-del">Rs.200</del>
          </span>
        </div>
        <div className="c-b-quantity">
          <div className="as-button">
            <IconButton onClick={decreaseQuantity}>
              <RemoveIcon className="minus"/>
            </IconButton>
            <span className="q-t">{quantity}</span>
            <IconButton onClick={increaseQuantity}>
              <AddIcon className="plus"/>
            </IconButton>
          </div>
          <div>
            <button className="r-button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
