import React from "react";
import "../styles/Cart.scss";
import CartCard from "./CartCard";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Cart = () => {
  return (
    <div className="cart-div">
      <div className="my-cart">
        <div className="c-up">
          <div className="c-left">
            <div className="mc-div">
              <span className="mc-text">My Cart (1)</span>
            </div>
            <div>
              <CartCard />
            </div>
          </div>
          <div className="c-right">
            <Select className="address-bar" size="small" displayEmpty>
              <MenuItem value="">Address 1</MenuItem>
              <MenuItem>Address 2</MenuItem>
              <MenuItem>Address 3</MenuItem>
            </Select>
          </div>
        </div>
        <div className="c-down">
          <button className="place-o-button">PLACE ORDER</button>
        </div>
      </div>
      <div className="temp-div">
        <span className="temp-text">Address Details</span>
      </div>
      <div className="temp-div">
        <span className="temp-text">Order Summary</span>
      </div>
    </div>
  );
};

export default Cart;
