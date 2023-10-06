import { Flex } from '@chakra-ui/react'
import { Hourglass } from 'react-loader-spinner'


const Loader = () => {
    return (
        <>
            <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" margin="80px">
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#000000', '#b8b7b3']}
                />
            </Flex>
        </>
    )
}

export default Loader