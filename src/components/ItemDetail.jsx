import { Card, Image, Stack, Text, CardBody, Divider, ButtonGroup, CardFooter, Heading, Flex } from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"

const ItemDetail = ({ product }) => {
    const { id } = useParams();

    const productosFiltrados = product.filter((producto) => producto.id == id);
    return (
        <div className="cards">

            {productosFiltrados.map((p) => {
                return (
                    <div key={p.id}>
                        <Center>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">{p.nombre}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.descripcion}</Text>
                                    <Text color='gray.600' fontSize='2xl'>${product.precio}</Text>
                                    <Text>{p.categoria}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                );
            })}
        </div>


    )
}

export default ItemDetail