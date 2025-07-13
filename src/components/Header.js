import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  const [buttonText, setButtonText] = useState("Login");
  //console.log("Header Rendered");   {proof: That Header Component is rendering again (Callling a Function === Rendering )}
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header w-full bg-white border-b  border-zinc-300 flex h-25 shadow-lg justify-between">
      <div className="logoBox">
        <img
          className="logo w-48 h-20 sm:w-28 sm:h-28 mt-0 sm:-mt-5 lg:w-58 lg:h-24"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div
        id="nav-items"
        className="flex items-center lg:w-100 h-auto lg:text-2xl sm:justify-items-center lg:justify-items-center justify-between sm:text-2xl  sm:justify-end"
      >
        <ul className="flex  justify-between -ml-40">
          <li className=" mr-1 sm:mr-1  lg:m-4  hover:text-red-600 hover:underline hover:underline-offset-8 ">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-1 sm:mr-1  lg:m-4 hover:text-red-600  hover:underline hover:underline-offset-8">
            {/* <a href="/about">About</a>            whole page refreshes here so dont use href anchor tag */}
            <Link to="/about">About</Link>
          </li>
          <li className=" mr-3 sm:mr-1  lg:m-4 hover:text-red-600  hover:underline hover:underline-offset-8">
            <Link to="contact">Contact Us </Link>
          </li>
          <li>
            {" "}
            <Link to="/Cart">
              {" "}
              <div className="text-red-600 relative -top-2 mr-5 ml-3 ">
                {" "}
                {cartItems.length}
              </div>
              <div className="text-red-400 relative -top-3 mr-5 hover:text-red-600 ">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>{" "}
            </Link>
          </li>
          <div id="cart-Box" className="flex items-center">
            <button
              className="  lg:m- loginButton pr-2 border-[1.5] border-red-400 rounded-xl  text-red-500 lg:px-2 lg:pb-1 hover:text-white hover:bg-red-400 "
              onClick={() => {
                buttonText === "Login"
                  ? setButtonText("Logout")
                  : setButtonText("Login");
                // console.log("Login button clicked");
              }}
            >
              {buttonText}
            </button>
            {/* <li className=" mr-1 sm:mr-1  lg:m-4 hover:text-red-600  hover:underline hover:underline-offset-8">
              {loggedInUser}
            </li> */}
            <div className="ml:10 sm:ml-2 lg:ml-10">
              {onlineStatus ? "🟢" : "🔴"}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
