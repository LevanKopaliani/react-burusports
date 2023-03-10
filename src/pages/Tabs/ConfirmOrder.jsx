import "./ConfirmOrder.scss";

import { useCartStore } from "../../pages/Home";

const ConfirmOrder = ({ className }) => {
  const AllCartItem = useCartStore((state) => state.CartItems);
  // const CartTotalQty = useCartStore((state) => state.CartItemsQty());
  const CartTotalPrice = useCartStore((state) => state.CartTotalPrice());
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  return (
    <div className={"confirm " + className}>
      <h1 className="confirm-title">თქვენი შეკვეთა წარმატებით შეიქმნა</h1>
      <div className="confirm-container">
        <div className="confirm-order-form">
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
                      <p onClick={() => removeCartItem({ product })}>remove</p>
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
          <div className="confirm-section">
            <p>შოპინგის გაგრძელება</p>
            <button className="order-confirm-button">ჩემი შეკვეთები</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
