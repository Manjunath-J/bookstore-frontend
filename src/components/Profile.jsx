import React from "react";
import "../styles/Profile.scss";

const Profile = () => {

  return (
    <div className="profile-cnt">
      <div className="pro-info">
        <div className="person-det">
          <div className="pro-1">
            <span className="pd-pro">Personal Details</span>
            <span className="edit-pro">Edit</span>
          </div>
          <div className="pro-2">
            <span className="pro-2-1">Full Name</span>
            <input type="text" className="pro-2-2" value="FullName" disabled />
          </div>
          <div className="pro-2">
            <span className="pro-2-1">Email ID</span>
            <input type="email" className="pro-2-2" value="Email" disabled />
          </div>
          <div className="pro-2">
            <span className="pro-2-1">Password</span>
            <input type="password" className="pro-2-2" value="FullName" disabled />
          </div>
          <div className="pro-2">
            <span className="pro-2-1">Mobile Number</span>
            <input type="text" className="pro-2-2" value="Phone Number" disabled />
          </div>
        </div>
        <div className="address-det">
          <div className="ad-1">
            <span className="ad-1-1">Address Details</span>
            <button className="ad-1-btn">Add New Address</button>
          </div>
          <div className="add-info">
            <div className="add-1">
              <span className="add-1-1">1. WORK</span>
              <span className="add-1-2">Edit</span>
            </div>
            <div className="add-2">
              <span className="add-2-1">Address</span>
              <textarea type="text" className="add-2-2" rows="4" value="Address" disabled>
                address
              </textarea>
            </div>
            <div className="add-3">
              <div className="add-3-1">
                <span className="add-3-txt">City/Town</span>
                <input type="text" className="add-3-inp" value="City" disabled />
              </div>
              <div className="add-3-1">
                <span className="add-3-txt">State</span>
                <input type="text" className="add-3-inp" value="State" disabled />
              </div>
            </div>
            <div className="add-4">
              <span className="add-4-txt">Type</span>
              <div className="add-rad-btn">
                <label className="rad-add">
                  <input type="radio" name="type" value="home" />
                  Home
                </label>
                <label className="rad-add">
                  <input type="radio" name="type" value="work" />
                  Work
                </label>
                <label className="rad-add">
                  <input type="radio" name="type" value="other" />
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
