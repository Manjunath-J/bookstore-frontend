import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../assets/education@2x.png";
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import Popper from "@mui/material/Popper";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Firstpage from "./Firstpage";

const Header = () => {

  const [user, setUser] = useState(false);
  const [opend, setOpend] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpend(true);
  };

  const handleClose = (value) => {
    setOpend(false);
    setSelectedValue(value);
  };


  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div className="head">
        <div className="name">
          <div className="logo-div">
            <img
              src={logo}
              className="logo"
              alt="book"
              onClick={() => handleNavigate("/home")}
            />
          </div>
          <div className="name-div">
            <h4
              className="project-name"
              onClick={() => handleNavigate("/home")}
            >
              Bookstore
            </h4>
          </div>
        </div>
        <div className="search-div">
          <ListItemIcon>
            <SearchIcon sx={{ color: "#9D9D9D" }}></SearchIcon>
          </ListItemIcon>
          <input className="search" type="search" placeholder="Search..." />
        </div>

        <div className="right-icons">
          <div className="profile" onClick={handleClick}>
            <div>
              <PersonOutlineOutlinedIcon
                sx={{ color: "#FFFFFF" }}
              ></PersonOutlineOutlinedIcon>
            </div>
            {user ? (
              <span style={{ color: "#FFFFFF", fontSize: "12px" }}>
                Profile
              </span>
            ) : (
              <span style={{ color: "#FFFFFF", fontSize: "12px" }}>
                Profile
              </span>
            )}
          </div>
          <div className="cart" onClick={() => handleNavigate("/cart")}>
            <div>
              <ShoppingCartOutlinedIcon
                sx={{ color: "#FFFFFF" }}
              ></ShoppingCartOutlinedIcon>
            </div>
            <span style={{ color: "#FFFFFF", fontSize: "12px" }}>Cart</span>
          </div>
        </div>
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        {user ? (
          <div className="pre-up-div"></div>
        ) : (
          <div className="no-up-div">
            <div className="no-1">
              <span className="welcome-txt">Welcome</span>
              <span className="access-txt">
                To access account and manage orders
              </span>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="sign-btn"
                  onClick={() => {
                    handleClickOpen();
                  }}
                >
                  LOGIN/SIGNUP
                </button>
              </div>
            </div>
            {/* <hr style={{color:"#878787"}}/> */}
            <div className="no-2">
              <div className="no-2-1">
                <ShoppingBagOutlinedIcon
                  sx={{ color: "#878787", fontSize: "15px" }}
                ></ShoppingBagOutlinedIcon>
                <span className="txt-1">My Orders</span>
              </div>
              <div
                className="no-2-1"
                onClick={() => {
                  handleNavigate("/wishlist");
                  handleClick();
                }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{ color: "#878787", fontSize: "15px" }}
                ></FavoriteBorderOutlinedIcon>
                <span className="txt-1">Wishlists</span>
              </div>
            </div>
          </div>
        )}
      </Popper>
      <Firstpage
        selectedValue={selectedValue}
        open={opend}
        onClose={handleClose}
      />
    </div>
  );
};

export default Header;
