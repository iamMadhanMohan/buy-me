import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products").then((res) => {
  //     setData(res.data.products);
  //     console.log(res.data.products);
  //   });
  // }, []);

  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setMenu={setMenu} />
        <Sidebar setMenu={setMenu} menuStatus={menu} />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
