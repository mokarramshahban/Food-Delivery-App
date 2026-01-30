import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="log-btn"
            onClick={() =>{
              btnName === "login"
                ? setBtnName ("logOut")
                : setBtnName ("login")
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
