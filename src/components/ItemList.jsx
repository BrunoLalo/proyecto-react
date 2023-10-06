import Item from "./Item"
import { Flex } from '@chakra-ui/react'
import Loader from "./Loader"

const ItemList = ({ productos }) => {

  const carga = []

  return (

    <div className="card">
      {
        carga ? <Item productos={productos} /> : <Loader />
      }
    </div>
  )

};

export default ItemList