import {Box, useColorModeValue} from '@chakra-ui/react';

function Layout({children}) {

    const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

    return (
        <Box bgColor={bgColor} minH="100vh">
            {children}
        </Box>
    )
}

export default Layout;