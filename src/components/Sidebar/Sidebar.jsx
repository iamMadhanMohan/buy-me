import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const menuItems = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const Sidebar = ({ setMenu, menuStatus }) => {
  const menu = menuItems.map((item) => <NavLink to={item}>{item}</NavLink>);

  return (
    <div className={menuStatus ? "sidebar" : "sidebar sidebar-hide"}>
      <div className="menu-icon">
        <GiHamburgerMenu onClick={() => setMenu(false)} />
      </div>
      <p>All Categories</p>
      {menu}
    </div>
  );
};

export default Sidebar;
