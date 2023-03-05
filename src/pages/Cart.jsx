import "../styles/Cart.scss";
import { useCartStore } from "../pages/Home";
import ProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";

const Cart = () => {
  const AllCartItem = useCartStore((state) => state.CartItems);
  const CartTotalQty = useCartStore((state) => state.CartItemsQty());
  const CartTotalPrice = useCartStore((state) => state.CartTotalPrice());
  const removeCartItem = useCartStore((state) => state.removeCartItem);

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
              <table>
                <thead>
                  <tr className="table-heading">
                    <th>ნივთი</th>
                    <th>ცალის ფასი</th>
                    <th>რაოდენობა</th>
                    <th>შეჯამება</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCartItem.map((product, index) => (
                    <tr className="product-item" key={index}>
                      <td data-title="ნივთი">
                        <img src={product.product.img} alt="" />
                        <h3>
                          {product.product.title}
                          <p onClick={() => removeCartItem({ product })}>
                            remove
                          </p>
                        </h3>
                      </td>
                      <td data-title="ცალის ფასი">{product.product.price} ₾</td>
                      <td data-title="რაოდენობა">{product.quantity}</td>
                      <td data-title="შეჯამება">
                        {Math.round(
                          Number(product.product.price) * product.quantity
                        )}{" "}
                        ₾
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="payment-container">
            <div className="payment-methods">
              <p className="total-qty">
                <span>ნივთები:</span>
                <span>
                  {AllCartItem.length > 0 ? CartTotalPrice + " ₾" : "0"}
                </span>
              </p>
              <p className="delivery">
                <span>მიწოდება:</span>
                <span>6 ₾</span>
              </p>
              <p className="sum">
                <span>ჯამი:</span>
                <span>{CartTotalPrice + 6} ₾</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
