import "./Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
            <Link to="/home" className="link">
              <h1>BuyMe</h1>
            </Link>
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
