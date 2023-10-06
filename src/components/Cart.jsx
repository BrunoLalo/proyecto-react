import Form from "./Form"
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";


const Cart = () => {
  const { cart, clearCart, precioTotal } = useContext(CartContext);


  if (cart.length == 0) {
    return (
      <>
        <h1>MI CARRITO</h1>

        <div className="carritoVacio">Su carrito esta vacio.</div>
        <div className="home">
          <Link to={"/"}>
            <Button className="home">
              Regresar a catalogo
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="cart">
      <h1>MI CARRITO</h1>
      <div >
        {cart.map((productos) => (
          <ItemCart key={productos.id} productos={productos} />
        ))}
      </div>
      <div className="limpiarBtn">
        <Button onClick={clearCart}>Limpiar el carrito</Button>
      </div>
      <div>
        <p className="precioTotal">Su Total es: ${precioTotal()}</p>
      </div>
      <Form />
    </div>
  )
}

export default Cart