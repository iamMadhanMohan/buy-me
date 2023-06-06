import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryProducts from "./components/Products/CategoryProducts";

import { addData } from "./Slices/ApiDataSlice";
import { useDispatch, useSelector } from "react-redux";

import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=0").then((res) => {
      dispatch(addData(res.data));
    });
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Header setMenu={setMenu} />
      <Sidebar setMenu={setMenu} menuStatus={menu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/category/:id" element={<CategoryProducts />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* {Object.keys(productData).length > 0 && } */}
    </div>
  );
}

export default App;
