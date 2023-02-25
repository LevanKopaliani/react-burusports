import "../styles/CartIcon.scss";
import CartImg from "../assets/img/cart.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <img src={CartImg} alt="cart" />
    </div>
  );
};

export default CartIcon;
