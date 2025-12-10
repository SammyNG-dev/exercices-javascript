import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { clearCart } from "../features/cart/cartSlice";
import ProductsList from "../components/ProductsList";
import { useDispatch } from "react-redux";

function Exercice9() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="products-and-cart">
        <ProductsList />
        <Cart />
      </div>
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => dispatch(clearCart())}
        >Vider le panier</button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice9;
