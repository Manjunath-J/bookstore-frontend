import React, { useState } from "react";
import fav from "../assets/Page-1.png";
import "../styles/Please.scss";
import Firstpage from "./Firstpage";

const Please = () => {
  const [opend, setOpend] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpend(true);
  };

  const handleClose = (value) => {
    setOpend(false);
    setSelectedValue(value);
  };

  return (
    <div className="p-txt">
      <div className="p-d">
        <span className="p1">PLEASE LOG IN</span>
        <span className="p2">Log into view the items in your lists</span>
      </div>
      <div>
        <img src={fav} alt="favorite" />
      </div>
      <div>
        <button
          className="p-log"
          onClick={() => {
            handleClickOpen();
          }}
        >
          LOGIN/SIGNUP
        </button>
      </div>
      <Firstpage
        selectedValue={selectedValue}
        open={opend}
        onClose={handleClose}
      />
    </div>
  );
};

export default Please;
