import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../features/cart/cartSlice";

function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Votre panier</h2>
      <h2>Total : {total} €</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <h3>
                  {item.name} x {item.quantity} : {item.price * item.quantity} €
                </h3>
                <button
                  type="button"
                  className="action-button"
                  onClick={() => dispatch(decrementItem(item.id))}
                >
                  -1
                </button>
                <button
                  type="button"
                  className="action-button"
                  onClick={() => dispatch(incrementItem(item.id))}
                >
                  +1
                </button>
                <button
                  type="button"
                  className="action-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Supprimer
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Aucun article dans votre panier</p>
      )}
    </>
  );
}

export default Cart;
