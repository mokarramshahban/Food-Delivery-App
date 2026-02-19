import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector ( (store)=> store.cart.items);
  return (
    <div className=" h-30 w-full flex bg-orange-100 shadow-lg">
      <div className="w-[30%]">
        <img className=" mx-4 w-30" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="flex">
        <ul className="flex items-center justify-between font-medium">
          <li className="m-4 border py-1 px-3 rounded">
            Internet Connection: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4">
            <Link to="/cart">Cart - [{cartItems.length}]</Link>
          </li>
          <button
            className="cursor-pointer border px-3 py-1 rounded-sm hover:bg-amber-50"
            onClick={() => {
              btnName === "login" ? setBtnName("logOut") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="m-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
