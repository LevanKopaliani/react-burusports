import "../styles/Cart.scss";
import { useCartStore } from "../pages/Home";
import ProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";

const Cart = () => {
  const AllCartItem = useCartStore((state) => state.CartItems);

  const CartItemList = AllCartItem.map((item) =>
    ProductData.find((product) => product.id === item.id)
  );

  return (
    <div className="cart">
      <div className="wrapper">
        <div className="container">
          <div className="cart-container">
            <div className="cart-container-heading">
              <h1 className="title">კალათა</h1>
              <p>შოპინგის გაგრძელება</p>
              <button className="cnt-shopping">ყიდვის გაგრძელება</button>
            </div>
            <div className="products-container">
              {CartItemList.map((product, index) => (
                <div className="product-item" key={index}>
                  <img src={product.img} alt="" />
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
