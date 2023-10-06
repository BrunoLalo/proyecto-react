import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const { productosTotales } = useContext(CartContext);

    return (
        <div>

            <span className="material-symbols-outlined">shopping_cart</span>
                
            
            <span className="cartItems">{productosTotales()|| ''}</span>

        </div>
    )
}

export default CartWidget