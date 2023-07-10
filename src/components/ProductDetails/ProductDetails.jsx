import { useState } from "react";
import "./ProductDetails.css";
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { useLocation, useParams } from "react-router-dom";

import { addProduct } from "../../Slices/CartSlice";
import { useDispatch } from "react-redux";

const discountPriceCalculator = (actualPrice, discountPercentage) => {
  const discountPrice = actualPrice * (discountPercentage / 100);
  return (actualPrice - discountPrice).toFixed(2);
};

const ProductDetails = () => {
  let dispatch = useDispatch();
  let location = useLocation();

  const [productData, setProductData] = useState(location.state.data);

  let afterDiscountPrice = discountPriceCalculator(
    productData.price,
    productData.discountPercentage
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [imageURL, setImageURL] = useState(productData.images[0]);

  const prevImage = () => {
    setImageIndex(imageIndex - 1);
    setImageURL(productData.images[imageIndex - 1]);
  };

  const nextImage = () => {
    setImageIndex(imageIndex + 1);
    setImageURL(productData.images[imageIndex + 1]);
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...productData,
        totalPrice: afterDiscountPrice,
        quantity: 1,
        unitPrice: afterDiscountPrice,
      })
    );
  };

  return (
    <div className="product-details">
      {productData && (
        <>
          <div className="product-left">
            <div
              className={
                imageIndex == 0
                  ? "arrow-button hide"
                  : "arrow-button position-left"
              }
              onClick={prevImage}
            >
              <BsFillArrowLeftCircleFill />
            </div>
            <img src={imageURL} alt="product-image" />
            <div
              className={
                imageIndex == productData.images.length - 1
                  ? "arrow-button hide"
                  : "arrow-button position-right"
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
        </>
      )}
    </div>
  );
};

export default ProductDetails;
