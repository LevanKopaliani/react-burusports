import { Link } from "react-router-dom";

import "../styles/ProductsCard.scss";

const ProductsCard = ({ img, title, price, id, fastBuy }) => {
  return (
    <Link to={`/Product-details`} state={{ id }} className="product-link">
      <div className="ProductsCard">
        <div className="whitespace"></div>
        <div className="img-container">
          <img src={img} alt="product" />
        </div>
        <div className="whitespace"></div>
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{price} ₾</p>
        </div>
        {fastBuy && (
          <div className="fast-buy">
            <button className="fast-buy-btn">სწრაფი დამატება</button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductsCard;
