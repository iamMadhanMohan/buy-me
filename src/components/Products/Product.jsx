import { useDispatch } from "react-redux";
import "./Product.css";
import { addDetails } from "../../Slices/SingleProductSlice";
import { useNavigate } from "react-router-dom";

const discountPriceCalculator = (actualPrice, discountPercentage) => {
  const discountPrice = actualPrice * (discountPercentage / 100);
  return (actualPrice - discountPrice).toFixed(2); // to fix the length of two digits after point
};

const Product = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const actualPrice = props.price;
  const discountPercentage = props.discount;
  const afterDiscountPrice = discountPriceCalculator(
    actualPrice,
    discountPercentage
  );

  const handleClick = () => {
    dispatch(addDetails(props.data));
    navigate(`/product/${props.data.id}`, { state: { data: props.data } });
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={props.thumbnail} alt="thumnail" />

      <div className="product-details-div">
        <h3 className="title">{props.title}</h3>

        <div className="brand-rating">
          <div className="brand-div">
            <p>brand:</p>
            <p className="brand">{props.brand}</p>
          </div>
        </div>

        <div className="discount-price">
          <p className="actual-price">$ {actualPrice}</p>
          <p className="price">$ {afterDiscountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
