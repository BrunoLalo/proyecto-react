import { Card, Image, Stack, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const Item = ({ productos }) => {
  return (
    <div className="cards">
      <Card maxW='sm'>
        <CardBody>
          <Image
            className="cards-im"
            src={productos.imagen}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className="cards-text" size='md'>{productos.nombre}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/item/${productos.id}`}>
              <Button variant='solid' colorScheme='gray'>
                Detalle
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Item