import "./ConfirmOrder.scss";
import ConfirmImg from "../../assets/img/confirm.svg";

import { useCartStore } from "../../pages/Home";
import { useState } from "react";

const ConfirmOrder = ({ className }) => {
  const AllCartItem = useCartStore((state) => state.CartItems);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const [ConfirmationBlockVisible, setConfirmationBlockVisible] =
    useState(false);

  const handleHeightChange = () => {
    setConfirmationBlockVisible(!ConfirmationBlockVisible);
  };

  return (
    <div className={"confirm " + className}>
      <h1 className="confirm-title">თქვენი შეკვეთა წარმატებით შეიქმნა</h1>

      <div className="confirm-container">
        <div
          className={
            ConfirmationBlockVisible
              ? "order-confirmation-block visible"
              : "hidden"
          }
        >
          <div className="confirm-img">
            <img src={ConfirmImg} alt="confirm" />
          </div>
          <div className="confirm-text">
            <h3>თქვენი შეკვეთა დადასტურდა</h3>
            <p>
              ინფორმაცია თქვენს შეკვეთასა და მიწოდების დეტალებთან დაკავშირებით
              შეგიძლიათ მიიღოთ ჩემი შეკვეთების გვერდზე, თქვენი შეკვეთა მშავდება.
              მადლობას გიხდით შენაძენისთვის
            </p>
          </div>
        </div>
        <div className="confirm-order-form">
          <table>
            <thead>
              <tr
                className="table-heading"
                style={
                  ConfirmationBlockVisible === true
                    ? { borderTop: "1px solid #e5e5e5" }
                    : null
                }
              >
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
            <button
              className="order-confirm-button"
              onClick={handleHeightChange}
            >
              ჩემი შეკვეთები
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
