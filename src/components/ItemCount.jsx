import { useState } from 'react'
import { Button} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = ({initial, stock, onAdd}) => {

const [contador, setContador] = useState (initial)

const sumar = () => {
    if(contador < 10){
        setContador (contador + 1)
    }
}

const restar = () => {
    if (contador > 0){
        setContador (contador - 1)
    }
}


return (
<>
    <div className = 'cont'>
    <Button onClick={sumar} disabled={contador>=stock}>+</Button>
    <h3 className='numCont' >{contador}</h3> 
    <Button onClick={restar} disabled={contador < 0}>-</Button>
    <Button id='botonAlert' onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
    </div>
</>
)
}

export default ItemCount