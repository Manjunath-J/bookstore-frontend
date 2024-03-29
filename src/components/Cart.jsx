import React, { useEffect, useState } from "react";
import "../styles/Cart.scss";
import Please from "./Please";
import CartCard from "./CartCard";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";
import { deleteCart, getCart, placeOrder } from "../utils/HttpService";

const Cart = () => {
  const [isAddress, setisAddress] = useState(false);
  const [continued, setContinued] = useState(false);
  const status = localStorage.getItem("Token") ? true : false;

  const [cartData, setCartData] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [total, setTotal] = useState("");
  const [isTotal, setIsTotal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (status) {
        const res = await getCart("/cart");
        if (res.data?.items) {
          setCartData(res.data.items);
          setTotal(res.data.total);
          if (res.data.items.length > 0) {
            setIsCart(true);
            setIsTotal(true);
          }
        }
      }
    };
    fetchData();
  }, [cartData]);

  const navigate = useNavigate();

  const handleNavigate = async () => {
    await placeOrder("order",{});
    await deleteCart("cart");
    navigate("/order");
  };

  const handleAddressDiv = (order) => {
    if (cartData.length > 0) setisAddress(order);
  };

  const handleContinue = (next) => {
    setContinued(next);
  };

  return (
    <>
      {status ? (
        <div className="cart-div">
          <div className="my-cart">
            <div className="c-up">
              <div className="c-left">
                <div className="mc-div">
                  <span className="mc-text">My Cart ({cartData.length})</span>
                </div>
                <div>
                  {isCart ? (
                    cartData.map((book) => (
                      <CartCard key={book._id} book={book} />
                    ))
                  ) : (
                    <div className="no-item-cart">
                      <span className="no-cart">No Items in Cart</span>
                    </div>
                  )}
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
                {isTotal ? (
                  <span style={{ fontSize: "22px", fontWeight: "500" }}>
                    Rs. {total}
                  </span>
                ) : (
                  <div></div>
                )}
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
                        rows="4"
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
                    onClick={() => handleContinue(true)}
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
                  {cartData.map((book) => (
                    <OrderCard key={book._id} book={book} />
                  ))}
                </div>
              </div>
              <div className="o-down">
                <span style={{ fontSize: "22px", fontWeight: "500" }}>
                  Rs. {total}
                </span>
                <button className="check-button" onClick={handleNavigate}>
                  CHECKOUT
                </button>
              </div>
            </div>
          ) : (
            <div className="temp-div">
              <span className="temp-text">Order Summary</span>
            </div>
          )}
        </div>
      ) : (
        <div className="p-cart">
          <Please />
        </div>
      )}
    </>
  );
};

export default Cart;
