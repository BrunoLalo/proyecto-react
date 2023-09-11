import { useState } from 'react'
import { Button} from '@chakra-ui/react'

const ItemCount = () => {

const [contador, setContador] = useState (0)

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

const onAdd = () => {
    if(contador > 0){
        alert(`Agregaste ${contador} items al carrito`)
    }
    
}
return (
<>
    <div className = 'cont'>
    <Button onClick={sumar}>+</Button>
    <h3 className='numCont' >{contador}</h3> 
    <Button onClick={restar}>-</Button>
    <Button id='botonAlert'  onClick={onAdd}>Agregar al carrito</Button>
    </div>
</>
)
}

export default ItemCount