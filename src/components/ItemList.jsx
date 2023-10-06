import { Grid, GridItem } from '@chakra-ui/react'
import Item from "./Item"


const ItemList = ({ productos }) => {
  return productos.map((p) => {

    return <Item key={p.id} p={p} />;
    
  });
};

export default ItemList