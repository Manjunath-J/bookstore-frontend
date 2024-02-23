import React, { useState } from "react";
import Firstpage from "./Firstpage";
import { useNavigate } from "react-router-dom";


const Sign = () => {

    const [opend, setOpend] = useState(true);
  const [selectedValue, setSelectedValue] = useState();

  const navigate= useNavigate()

  const handleClose = (value) => {
    setOpend(false);
    setSelectedValue(value);
    navigate("/home")
  };


    return (
        <div>
            <Firstpage
                selectedValue={selectedValue}
                open={opend}
                onClose={handleClose}
              />
        </div>
    );
}

export default Sign;
