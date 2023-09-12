import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Flex, Box, Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav'>
            <Flex>
                <Box p='4' >
                    <Menu>
                        <MenuButton>
                            Categorías
                        </MenuButton>
                        <MenuList>
                            <MenuItem><Link to={`/categoria/${"ropa"}`}>Ir a Ropa</Link></MenuItem>
                            <MenuItem><Link to={`/categoria/${"libro"}`}>Ir a Libros</Link></MenuItem>
                            <MenuItem><Link to={`/categoria/${"otros"}`}>Ir a Otros Objetos</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Box p='4' >
                    <Link to={"/"}>
                        <h3>PotterStore</h3>
                    </Link>
                </Box>

                <Spacer />

                <Box p='4'>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar