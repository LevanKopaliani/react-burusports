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
                  {CartItemList.map((product, index) => (
                    <tr className="product-item" key={index}>
                      <td>
                        <img src={product.img} alt="" />
                        <p>{product.title}</p>
                      </td>
                      <td>
                        <p>{product.price} ₾</p>
                      </td>
                      <td>
                        <p>
                          {
                            AllCartItem.find((item) => item.id === product.id)
                              .quantity
                          }
                        </p>
                      </td>
                      <td>
                        <p>
                          {Math.round(
                            Number(product.price) *
                              AllCartItem.find((item) => item.id === product.id)
                                .quantity
                          )}{" "}
                          ₾
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
