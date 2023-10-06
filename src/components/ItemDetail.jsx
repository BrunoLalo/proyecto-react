import { Card, Image, Stack, Text, CardBody, Divider, CardFooter, Heading, CardHeader, ButtonGroup, Button } from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
    const { agregarAlCart } = useContext(CartContext)

    const [irAlCart, setIrAlCart] = useState(false)

    const onAdd = (quantity) => {
        setIrAlCart(true);
        agregarAlCart(producto, quantity);
    }
    return (
        <div className="cards">
            <div>
                    <Card className="cardDet">
                        <CardBody>
                            <Image
                                className="cards-im"
                                src={producto.imagen}
                                borderRadius='lg' />
                            <CardHeader>
                                <Stack mt='6' spacing='3'>
                                    <Heading className="cards-text" size='md'>{producto.nombre}</Heading>
                                </Stack>
                            </CardHeader>
                            <Text>{producto.descripcion}</Text>
                            <Text color='gray.600' fontSize='2xl'>${producto.precio}</Text>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing="2">
                                {
                                    irAlCart ? <Link to='/cart'> <Button>Terminar Compra</Button></Link> : <ItemCount initial={0} onAdd={onAdd} />
                                }
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
            </div>

        </div >


    )
}

export default ItemDetail