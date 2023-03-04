import "../styles/SimilarProducts.scss";
import ProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";
const SimilarProducts = () => {
  const ProductsList = ProductData.slice(4);
  return (
    <div className="similar-products">
      <div className="heading">
        <h1>მსგავსი პროდუქტები</h1>
        <span>მეტის ნახვა</span>
      </div>
      <div className="similar-products-list">
        {ProductsList.map((product, index) => (
          <ProductsCard
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
