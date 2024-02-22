import React, { useState } from "react";
import "../styles/Cart.scss";
import CartCard from "./CartCard";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OrderCard from "./OrderCard";

const Cart = () => {
  const [isAddress, setisAddress] = useState(false);
  const [continued, setContinued] = useState(false);

  const handleAddressDiv = (order) => {
    setisAddress(order);
  };

  const handleCOntinue = (next) => {
    setContinued(next);
  };

  return (
    <>
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
          {!isAddress ? (
            <div className="c-down">
              <button
                className="place-o-button"
                onClick={() => handleAddressDiv(true)}
              >
                PLACE ORDER
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {isAddress ? (
          <div className="address-div">
            <div className="ad-up">
              <div className="ad-left">
                <div>
                  <span className="cust-text">Customer Details</span>
                </div>
                <div className="ad-info">
                  <div className="ad-1">
                    <div className="ad-div">
                      <span className="ad-txt">Full Name</span>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="ad-input"
                      />
                    </div>
                    <div className="ad-div">
                      <span className="ad-txt">Mobile Number</span>
                      <input
                        type="text"
                        placeholder="Number"
                        className="ad-input"
                      />
                    </div>
                  </div>
                  <div className="ad-2">
                    <span className="ad-txt">Address</span>
                    <textarea
                      type="text"
                      placeholder="Address"
                      className="ad-input-large"
                    />
                  </div>
                  <div className="ad-3">
                    <div className="ad-div">
                      <span className="ad-txt">city/Town</span>
                      <input
                        type="text"
                        placeholder="City"
                        className="ad-input"
                      />
                    </div>
                    <div className="ad-div">
                      <span className="ad-txt">State</span>
                      <input
                        type="text"
                        placeholder="State"
                        className="ad-input"
                      />
                    </div>
                  </div>
                  <div className="ad-4">
                    <span className="ad-txt">Type</span>
                    <div className="radio-btn">
                      <label className="rad-lab">
                        <input type="radio" name="type" value="home" />
                        Home
                      </label>
                      <label className="rad-lab">
                        <input type="radio" name="type" value="work" />
                        Work
                      </label>
                      <label className="rad-lab">
                        <input type="radio" name="type" value="other" />
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-right">
                <button className="add-home">Add New Address</button>
              </div>
            </div>
            {!continued ? (
              <div className="ad-down">
                <button
                  className="cont-button"
                  onClick={() => handleCOntinue(true)}
                >
                  CONTINUE
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div className="temp-div">
            <span className="temp-text">Address Details</span>
          </div>
        )}

        {continued ? (
          <div className="order-div">
            <div className="o-up">
                <div>
                    <span className="o-summary">Order Summary</span>
                </div>
                <div>
                    <OrderCard />
                </div>
            </div>
            <div className="o-down">
              <button className="check-button">CHECKOUT</button>
            </div>
          </div>
        ) : (
          <div className="temp-div">
            <span className="temp-text">Order Summary</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
