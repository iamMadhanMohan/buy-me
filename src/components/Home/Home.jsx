import React from "react";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

const popular = ["mens-shirts", "laptops", "womens-bags", "smartphones"];

const Home = () => {
  const apiData = useSelector((state) => state.apiData.products);

  const getFilteredComponent = (category) => {
    let productComponent;

    if (apiData) {
      const filteredData = apiData.filter((item) => item.category == category);

      productComponent = filteredData.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          discount={item.discountPercentage}
          rating={item.rating}
          brand={item.brand}
          thumbnail={item.thumbnail}
          data={item}
        />
      ));
    }

    return productComponent;
  };

  const filteredComponents = popular.map((category) =>
    getFilteredComponent(category)
  );

  const [mens, laptops, womens, smartphones] = filteredComponents;

  return (
    <div className="category-product">
      <h1 className="heading">{popular[0]}</h1>
      <div className="products-components">{mens}</div>
      <h1 className="heading">{popular[1]}</h1>
      <div className="products-components">{laptops}</div>
      <h1 className="heading">{popular[2]}</h1>
      <div className="products-components">{womens}</div>
      <h1 className="heading">{popular[3]}</h1>
      <div className="products-components">{smartphones}</div>
    </div>
  );
};

export default Home;
