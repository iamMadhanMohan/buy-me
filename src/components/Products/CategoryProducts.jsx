import "./CategoryProduct.css";
import Product from "./Product";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
  const apiData = useSelector((state) => state.apiData.products);
  const category = useSelector((state) => state.category.category);

  let productComponent;

  if (category.length > 0) {
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

  return (
    <div className="category-product">
      <h1 className="heading">{category}</h1>
      <div className="products-components">{productComponent}</div>
    </div>
  );
};

export default CategoryProducts;
