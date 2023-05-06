import React from "react";
import { BsChatRightText } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="fifth-div">
        <div className="icons">
          <Link to="/">
            <RiHomeSmile2Fill style={{ fontSize: "32px", color: "#199589" }} />
          </Link>
          <Link to="/chat">
            <BsChatRightText style={{ fontSize: "28px", color: "#199589" }} />
          </Link>
          <Link to="/help">
            <IoMdHelpCircleOutline
              style={{ fontSize: "34px", color: "#199589" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
