import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryProducts from "./components/Products/CategoryProducts";

import { addData } from "./Slices/ApiDataSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

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
      <CategoryProducts />
    </div>
  );
}

export default App;
