// import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
// import { addCategory } from "../../Slices/CategoryProductsSlice";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

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
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/category/${item}`);
    setMenu(!menuStatus);
  };

  const menu = menuItems.map((item, index) => (
    <p onClick={() => handleClick(item)} key={index}>
      {/* <Link to={`/category/${item}`} className="link"> */}
      {item}
      {/* </Link> */}
    </p>
  ));

  return (
    <div className={menuStatus ? "sidebar" : "sidebar sidebar-hide"}>
      <div className="menu-icon">
        <GiHamburgerMenu onClick={() => setMenu(false)} />
      </div>
      <p className="sub-heading">All Categories</p>
      {menu}
    </div>
  );
};

export default Sidebar;
