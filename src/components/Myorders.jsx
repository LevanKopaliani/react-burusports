import "../styles/Myorders.scss";
import SampleOrderItem from "../assets/img/sample-order1.png";

const Myorders = () => {
  return (
    <div className="myorders">
      <h1 className="myorders-title">შეკვეთები</h1>
      <div className="orders-list">
        <div className="orders-list-heading">
          <div className="order-date">
            <p className="order-date-title">შეკვეთის თარიღი</p>
            <p className="order-date-date">20 თებერვალი 2022</p>
          </div>
          <div className="order-price">
            <p className="order-price-title">ჯამში</p>
            <p className="price">2300₾</p>
          </div>
          <div className="order-details">
            <p className="order-number">ORDER # 32102-213121</p>
            <p className="order-invoice">ინვოისის ნახვა</p>
          </div>
        </div>
        <div className="orders-list-content">
          <div className="order-item">
            <img src={SampleOrderItem} alt="order item" />
            <p className="order-item-name">
              Mirage K175 Samoa Hammer Knife Black
            </p>
          </div>
          <div className="order-item">
            <img src={SampleOrderItem} alt="order item" />
            <p className="order-item-name">
              Mirage K175 Samoa Hammer Knife Black
            </p>
          </div>
        </div>
        <div className="orders-list-footer">
          <div className="delivery-time">
            <p className="delivery-time-title">მიწოდების დრო</p>
            <p className="delivery-time-date">20 თებერვალი 2022</p>
          </div>
          <div className="delivery-address">
            <p className="delivery-address-title">მისამართი</p>
            <p className="delivery-address-details">
              თბილისი, ონიაშვილის 68, ბინა 007, სართული 07
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myorders;
