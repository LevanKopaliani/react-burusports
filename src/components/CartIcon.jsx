import "../styles/CartIcon.scss";
import CartImg from "../assets/img/cart.svg";
import { Link } from "react-router-dom";
import { useCartStore } from "../pages/Home";

const CartIcon = () => {
  const CartItemQuantity = useCartStore((state) => state.CartItems.length);
  return (
    <div className="cart-icon">
      <Link to="/Cart">
        <img src={CartImg} alt="cart" />
        {CartItemQuantity !== 0 && <span>{CartItemQuantity}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
