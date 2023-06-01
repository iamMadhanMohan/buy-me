import "./Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Header = ({ setMenu }) => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <div className="sidebar-menu-icon">
            <GiHamburgerMenu onClick={() => setMenu(true)} />
          </div>
          <div className="logo">
            <div>
              <BsFillHandbagFill />
            </div>
            <h1>BuyMe</h1>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart />
          <p>12</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
