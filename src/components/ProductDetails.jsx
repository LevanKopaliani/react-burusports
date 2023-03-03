import "../styles/ProductDetails.scss";
import ProductData from "../data/homepageproducts/HomePageProductData";
import { useLocation } from "react-router-dom";

import ShareFb from "../assets/img/share-fb.svg";
import ShareTw from "../assets/img/share-tw.svg";
import ShareTl from "../assets/img/share-tl.svg";
import Minus from "../assets/img/Minus.svg";
import Plus from "../assets/img/Plus.svg";
import { useState } from "react";

const ProductDetails = ({ state }) => {
  const location = useLocation();
  const { id } = location.state;
  const product = ProductData.find((product) => product.id === id);

  // input quantity
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    e.target.value < 1 ? setQuantity(1) : setQuantity(e.target.value);
  };

  // Main Image
  const [mainImage, setMainImage] = useState(product.img);

  const changeImage = (img) => {
    // setMainImage(img);
  };

  //
  return (
    <div className="product-details">
      <div className="wrapper">
        <div className="container">
          <div className="product-details-container">
            <div className="img-block">
              <div className="mainimg">
                <img src={mainImage} alt="" />
              </div>
              <div className="product-thumbs">
                {product.thumbnails &&
                  product.thumbnails.map((img, index) => (
                    <img
                      src={img}
                      alt=""
                      key={index}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
              </div>
            </div>
            <div className="details-block">
              <h1 className="product-title">{product.title}</h1>
              <div className="product-price-block">
                <p className="product-price">{product.price}</p>
                <p className="guarantee">
                  გარანტია: 3 თვე შეძენის დამადასტურებელი საწარმოო ხარვეზების
                  წინააღმდეგ
                </p>
                <div className="social-share">
                  <p>გააზიარეთ</p>
                  <ul className="social-share-list">
                    <li className="social-share-links">
                      <img src={ShareFb} alt="Facebook" />
                    </li>
                    <li className="social-share-links">
                      <img src={ShareTw} alt="Tweeter" />
                    </li>
                    <li className="social-share-links">
                      <img src={ShareTl} alt="Telegram" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-quantity">
                <p>რაოდენობა:</p>
                <p className="quantity-input">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity === 1 ? true : false}
                  >
                    <img src={Minus} alt="minus" />
                  </button>
                  <input
                    type="number"
                    className="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <img src={Plus} alt="Plus" />
                  </button>
                </p>
                <button className="add-to-cart">კალათაში დამატება</button>
                <button className="ganvadeba">განვადებით შეძენა</button>
              </div>
              <div className="delivery-info">
                <p>მიწოდების ინფორმაცია</p>
                <br />
                <p>სტანდარტული მიწოდების ღირებულება: 6.00₾ </p>
                <br />
                <p>
                  *გამორიცხულია მიწოდება გარე კუნძულებზე - (ჩეთემის კუნძულები,
                  სტიუარტის კუნძული, კავაუს კუნძული, ვაიჰეკე, კუნძული მატაკანა,
                  დიდი ბარიერული კუნძული და კუნძული დ'ურვილი), რაც დამატებით
                  ხარჯებს მოითხოვს.
                </p>
              </div>
            </div>
          </div>
          <div className="product-specifications">
            <p className="specs-title">სპეციფიკაციები</p>
            <ul className="specs-list">
              {product.specs.map((item, index) => (
                <li className="specs-list-item" key={index}>
                  <span>{Object.keys(item)}:</span>
                  <span>{Object.values(item)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="detailed-info">
            <p className="info-title">დეტალური აღწერა</p>
            <p className="product-info">{product.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
