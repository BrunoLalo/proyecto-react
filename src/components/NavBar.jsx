import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Flex, Box, Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'



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
                            <MenuItem>Categoría A</MenuItem>
                            <MenuItem>Categoría B</MenuItem>
                            <MenuItem>Categoría C</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4' >
                    <h3>PotterStore</h3>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar