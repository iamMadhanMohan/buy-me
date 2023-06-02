import { useDispatch } from "react-redux";
import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { addCategory } from "../../Slices/CategoryProductsSlice";

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
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addCategory(item));
  };

  const menu = menuItems.map((item, index) => (
    <p onClick={() => handleClick(item)} key={index}>
      {item}
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
