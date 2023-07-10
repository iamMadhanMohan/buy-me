import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../Products/Product";

const SearchResults = () => {
  const searchedValue = useSelector((state) => state.search.searchedValue);
  const products = useSelector((state) => state.apiData.products);

  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (searchedValue.length > 0) {
      const filteredComponents = products.filter((item) =>
        item.title.toLowerCase().includes(searchedValue)
      );

      setSearchedProducts(filteredComponents);
    }
  }, [searchedValue]);

  const results = searchedProducts.map((item) => (
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

  return (
    <div className="search-results category-product">
      <h1 className="heading">Searched Results</h1>
      <div className="products-components">{searchedValue && results}</div>
    </div>
  );
};

export default SearchResults;
