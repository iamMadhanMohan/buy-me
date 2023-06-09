import "./Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = ({ setMenu }) => {
  const cartData = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.apiData.products);
  const cartItems = cartData.length;

  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setResult(
      products.filter((item) =>
        item.title.toLowerCase().includes(event.target.value)
      )
    );
  };

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
          <input
            type="text"
            placeholder="type here"
            onChange={handleChange}
            value={search}
          />
          <div className="search-icon">
            <FaSearch />
          </div>
          {search && (
            <div className="search-filter">
              {result.map((item) => (
                <p>{item.title}</p>
              ))}
            </div>
          )}
        </div>
        <div className="link cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <p>{cartItems}</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
