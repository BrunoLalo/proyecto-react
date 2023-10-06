import { Card, Image, Stack, Text, CardBody, Divider, CardFooter, Heading, CardHeader, ButtonGroup, Button } from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ productos }) => {
    const { id } = useParams();


    const { agregarAlCart } = useContext(CartContext)
    const [irAlCart, setIrAlCart] = useState(false)

    const onAdd = (quantity) => {
        setIrAlCart(true);
        agregarAlCart(productos, quantity);
    }


    const productosFiltrados = productos.filter((producto) => producto.id == id);
    return (
        <div className="cards">

            {productosFiltrados.map((p) => {
                return (
                    <div key={p.id}>
                        <Card className="cardDet">
                            <CardBody>
                                <Image
                                    className="cards-im"
                                    src={p.imagen}
                                    borderRadius='lg' />
                                <CardHeader>
                                    <Stack mt='6' spacing='3'>
                                        <Heading className="cards-text" size='md'>{p.nombre}</Heading>
                                    </Stack>
                                </CardHeader>
                                <Text>{p.descripcion}</Text>
                                <Text color='gray.600' fontSize='2xl'>${p.precio}</Text>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing="2">
                                    {
                                        irAlCart ? <Link to='/cart'> <Button>Terminar Compra</Button></Link> : <ItemCount initial={0} onAdd={onAdd} />
                                    }
                                </ButtonGroup>                            </CardFooter>
                        </Card>
                    </div>
                );
            })}
        </div >


    )
}

export default ItemDetail