import "../styles/RecommendedProducts.scss";
import ProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";

const RecommendedProducts = () => {
  const ProductsList = ProductData.slice(4);
  return (
    <div className="recommended-products">
      <div className="heading">
        <h1>რეკომენდირებული პროდუქტები</h1>
      </div>
      <div className="similar-products-list">
        {ProductsList.map((product, index) => (
          <ProductsCard
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            key={product.id}
            fastBuy={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
