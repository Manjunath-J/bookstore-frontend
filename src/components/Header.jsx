import React from "react";
import "../styles/Header.scss";
import logo from "../assets/education@2x.png";
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/home")
  }

  return (
    <div>
      <div className="head">
        <div className="name">
          <div className="logo-div">
            <img src={logo} className="logo" alt="book" onClick={handleClick}/>
          </div>
          <div className="name-div">
            <h4 className="project-name" onClick={handleClick}>Bookstore</h4>
          </div>
        </div>
        <div className="search-div">
          <ListItemIcon>
            <SearchIcon sx={{ color: "#9D9D9D" }}></SearchIcon>
          </ListItemIcon>
          <input className="search" type="search" placeholder="Search..." />
        </div>

        <div className="right-icons">
          <div className="profile">
            <div>
              <PersonOutlineOutlinedIcon
                sx={{ color: "#FFFFFF" }}
              ></PersonOutlineOutlinedIcon>
            </div>
            <span style={{ color: "#FFFFFF", fontSize:"12px" }}>Profile</span>
          </div>
          <div className="cart">
            <div>
              <ShoppingCartOutlinedIcon
                sx={{ color: "#FFFFFF" }}
              ></ShoppingCartOutlinedIcon>
            </div>
            <span style={{ color: "#FFFFFF", fontSize:"12px" }}>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
