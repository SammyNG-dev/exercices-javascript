import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductsList() {
  const products = [
    { name: "Clavier mécanique", price: 80 },
    { name: "Souris gamer", price: 45 },
    { name: "Ecran 144Hz", price: 199 },
  ];

  const dispatch = useDispatch();

  return (
    <>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <h3>
                {product.name} : {product.price} €
              </h3>
              <button
                type="button"
                className="action-button"
                onClick={() => dispatch(addItem(product))}
              >Ajouter au panier</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ProductsList;
