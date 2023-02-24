import "../styles/Cart.scss";
import CartImg from "../assets/img/cart.svg";

const Cart = () => {
  return (
    <div className="cart">
      <img src={CartImg} alt="cart" />
    </div>
  );
};

export default Cart;
