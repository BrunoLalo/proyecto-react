import { Flex } from "@chakra-ui/react";
import Item from "./Item"
import Loader from "./Loader"

const ItemList = ({ productos }) => {


  return (

    <div >
      {
        productos.map( (producto) => <Item key={producto.id} producto={producto} />)
      }
    </div>
  )
}

export default ItemList