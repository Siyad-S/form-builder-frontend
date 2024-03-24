import React from "react";
import "./Header.css";
import Icon from "../../assets/5968528.png";

const Header = ({ title, setTitle }) => {
  return (
    <div className="main_header">
      <div className="header_icon">
        <img src={Icon} alt="" />
      </div>
      <div className="header_title">
        <input type="text" onChange={() => title()} value={title} />
      </div>
    </div>
  );
};

export default Header;
