import Item from "./Item"
import { Flex } from '@chakra-ui/react'

const ItemList = ({ productos }) => {

  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" > 
      {
        productos.map((p) => {
        return (
        <Item producto={p} key={p.id} />
      )})}
      </Flex>

    </div>
  )
}

export default ItemList