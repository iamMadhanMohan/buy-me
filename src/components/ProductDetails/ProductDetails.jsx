import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { addProduct } from "../../Slices/CartSlice";

import { useState } from "react";

const discountPriceCalculator = (actualPrice, discountPercentage) => {
  const discountPrice = actualPrice * (discountPercentage / 100);
  return (actualPrice - discountPrice).toFixed(2); // to fix the length of two digits after point
};

const ProductDetails = () => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [imageURL, setImageURL] = useState(productData.images[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const afterDiscountPrice = discountPriceCalculator(
    productData.price,
    productData.discountPercentage
  );

  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
      setImageURL(productData.images[imageIndex]);
    }
  };

  const nextImage = () => {
    if (imageIndex < productData.images.length - 1) {
      setImageIndex((prev) => prev + 1);
      setImageURL(productData.images[imageIndex]);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...productData,
        quantity: 1,
        totalPrice: afterDiscountPrice,
        unitPrice: afterDiscountPrice,
      })
    );
  };

  return (
    <div className="product-details">
      <div className="product-left">
        <div
          className={imageIndex == 0 ? "arrow-button hide" : "arrow-button"}
          onClick={prevImage}
        >
          <BsFillArrowLeftCircleFill />
        </div>
        <img src={imageURL} alt="product-image" />
        <div
          className={
            imageIndex == productData.images.length - 1
              ? "arrow-button hide"
              : "arrow-button"
          }
          onClick={nextImage}
        >
          <BsArrowRightCircleFill />
        </div>
      </div>
      <div className="right">
        <p className="product-title">{productData.title}</p>

        <div className="flex-div margin-bottom">
          <p className="primary-color">Ratings: </p>
          <p className="details">{productData.rating}</p>
          <p className="primary-color">Brand: </p>
          <p className="details">{productData.brand}</p>
          <p className="primary-color">Category: </p>
          <p className="details">{productData.category}</p>
        </div>

        <div className="margin-bottom">
          <p>Description:</p>
          <p className="details2">{productData.description}</p>
        </div>

        <div className="flex-div">
          <p className="actual-price">${productData.price}</p>
          <p>(inclusive of all taxes)</p>
        </div>

        <div className="flex-div margin-bottom">
          <p className="final-price">${afterDiscountPrice}</p>
          <p className="discount">{productData.discountPercentage}% off</p>
        </div>

        <button className="add-cart-button" onClick={handleAddToCart}>
          Add To Cart
        </button>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
