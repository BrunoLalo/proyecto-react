import { Card, Image, Stack, Text, CardBody, Divider, CardFooter, Heading, CardHeader } from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

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
                                <ItemCount />
                            </CardFooter>
                        </Card>
                    </div>
                );
            })}
        </div >


    )
}

export default ItemDetail