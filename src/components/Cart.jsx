import Form from "./Form"
import { Link } from 'react-router-dom'
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";


const Cart = () => {
  const { cart, clearCart, precioTotal } = useContext(CartContext);


  if (cart.length === 0) {
    return (
      <div className="noCart">
        <h1>MI CARRITO</h1>
        <h2 className="noProductos">No se encuentra productos en el carrito</h2>
        <Link to={"/"}>
          <Button className="btnHome">
            Regresar a catalogo
          </Button>
        </Link>
      </div>
    )
  }
  return (
    <div className="cart">
      <h1>MI CARRITO</h1>
      <Flex flexWrap="wrap" justifyContent="center">
        <div>
          {cart.map((productos) => (
            <ItemCart key={productos.id} productos={productos} />
          ))}
        </div>
      </Flex>
      <div>
        <p className="precioTotal">Su Total es: ${precioTotal()}</p>
      </div>
      <div className="limpiarBtn">
        <Button onClick={clearCart}>Limpiar el carrito</Button>
      </div>
      <Form />
    </div>
  )
}

export default Cart