import { CartContext } from '../context/CartContext'
import { Button, Grid } from '@chakra-ui/react'
import { useContext } from 'react'

const ItemCart = ({ productos }) => {
  const { quitarDelCart } = useContext(CartContext)
  return (
    <div className='itemCart'>
      <img src={productos.imagen} alt={productos.nombre} className='imgCart' />
      <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <h2>{productos.nombre}</h2>
          <h3>Cantidad:{productos.quantity}</h3>
          <h3>${productos.precio}</h3>
          <h3>Subtotal: ${productos.quantity * productos.precio}</h3>
          <Button onClick={() => quitarDelCart(productos.id)} className='eliminarBtn'>Eliminar</Button>
          </Grid>
      </div>
    </div>
  )
}

export default ItemCart