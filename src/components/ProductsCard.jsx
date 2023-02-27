import "../styles/ProductsCard.scss";

const ProductsCard = ({ img, title, price, id }) => {
  return (
    <div className="ProductsCard">
      <div className="whitespace"></div>
      <div className="img-container">
        <img src={img} alt="product" />
      </div>
      <div className="whitespace"></div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;
