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
                            <MenuItem>Ropa</MenuItem>
                            <MenuItem>Libros</MenuItem>
                            <MenuItem>Otros Items</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Box p='4' >
                    <h3>PotterStore</h3>
                </Box>
                
                <Spacer />

                <Box p='4'>
                    <Link to = {"/cart"}>
                    <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar