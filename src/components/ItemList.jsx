import Item from "./Item"
import { Flex } from '@chakra-ui/react'

const ItemList = ({ product }) => {

  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" > 
      {
        product?.map((p) => {
        return (
        <Item producto={p} key={p.id} />
      )})}
      </Flex>

    </div>
  )
}

export default ItemList