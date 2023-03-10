import "./Delivery.scss";
import Minus from "../../assets/img/Minus.svg";
import Plus from "../../assets/img/Plus.svg";
import Xcircle from "../../assets/img/XCircle.svg";

const Delivery = ({ className }) => {
  return (
    <div className={"delivery " + className}>
      <h1 className="delivery-title">მიწოდების ინფორმაცია</h1>
      <div className="delivery-form">
        <div className="delivery-info">
          <h3>მიწოდების მეთოდი</h3>
          <div className="standart-delivery">
            <input type="radio" id="delivery" />
            <label htmlFor="delivery">
              <p>სტანდარტული მიწოდება</p>
              <p>
                პროდუქტის ონლაინ შეძენისას სტანდარტული მიწოდების პერიოდი 3-5
                დღეა, მძიმე ან დიდი მოცულების პროდუქტებისთვის კი 3-7 დღე
              </p>
            </label>
          </div>
          <div className="delivery-user">
            <h3>მიწოდების მეთოდი</h3>
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="mail">
                  <span>ელ. ფოსტა</span>
                  <span>*აუცილებელია</span>
                </label>
                <input
                  type="email"
                  id="mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder=" "
                  required
                />
              </div>
              <div className="input-line">
                <label htmlFor="tel">
                  <span>ტელეფონის ნომერი</span>
                </label>
                <input
                  type="tel"
                  id="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>
          <div className="delivery-contacts">
            <h3>მიწოდების ინფორმაცია</h3>
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="name">
                  <span>სახელი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="text" id="name" placeholder=" " required />
              </div>
              <div className="input-line">
                <label htmlFor="surname">
                  <span>გვარი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="text" id="surname" placeholder=" " required />
              </div>
            </div>
            <div className="input-line address-line">
              <label htmlFor="address">
                <span>მისამართი</span>
                <span>*აუცილებელია</span>
              </label>
              <input
                type="text"
                id="address"
                placeholder="დაიწყე წერა..."
                required
              />
            </div>
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="address-details">
                  <span>სართული / კარები / კოდი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input
                  type="text"
                  id="address-details"
                  placeholder=" "
                  required
                />
              </div>
              <div className="input-line">
                <label htmlFor="city">
                  <span>ქალაქი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="text" id="city" placeholder="თბილისი" required />
              </div>
            </div>
            <div className="input-line comment">
              <label htmlFor="comment">
                <span>კომენტარი</span>
                <span>*აუცილებელია</span>
              </label>
              <textarea type="text" id="comment" placeholder=" " />
            </div>
            <div className="submit-block">
              <span>ავტორიზაციაზე დაბრუნება</span>
              <button>გადახდა</button>
            </div>
          </div>
        </div>
        <div className="delivery-cart-info">
          <h3 className="cart-items-qty">კალათა (1)</h3>
          <div className="products-in-cart">
            <h3>
              Mirage K175 Samoa Hammer Knife Black
              <p>
                49.99₾
                <span>
                  <img src={Xcircle} alt="" />
                </span>
              </p>
            </h3>
            <div className="quantity">
              <h4>რაოდენობა:</h4>
              <span>
                <p className="quantity-input">
                  <button>
                    <img src={Minus} alt="minus" />
                  </button>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    className="quantity"
                    // min="1"
                    defaultValue="1"
                  />
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </p>
              </span>
            </div>
            <div className="item-prices">
              <p className="item-prices-total">
                <span>ნივთები:</span>
                <span>49.99₾</span>
              </p>
              <p className="delivery-price">
                <span>მიწოდება:</span>
                <span>6.00₾</span>
              </p>
            </div>
            <div className="total-price">
              <p>ჯამი:</p>
              <p>55.99₾</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
