import { Flex, Box, Stack, Badge, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

export default function Jobs() {
    const borderColor = useColorModeValue("green", "teal");

    return (
        <Flex margin="0 auto" flexDirection="column" justifyContent="center" alignItems="center">
            <Box p={3}>albuns jobs dos quais me orgulho:</Box>
            <Flex flexWrap="wrap" justifyContent="center">
                <Box
                    w='250px'
                    rounded='10px'
                    overflow='hidden'
                    boxShadow='sm'
                    borderColor={borderColor}
                    border='1px'
                    m={1}
                >
                    <img src='./card-login-industria.jpg' alt='Login Indústria' />
                    <Flex p={2} justifyContent='center'>
                        <Stack isInline align="baseline" direction="row">
                            <Badge variant='solid' colorScheme={borderColor} rounded='full' px={2} mr={2}>
                                <Text fs='5pt'> NEXT.JS </Text>
                            </Badge>
                        </Stack>
                        <Stack isInline align="baseline">
                            <Badge variant='solid' colorScheme={borderColor} rounded='full' px={2}>
                                CHAKRA UI
                            </Badge>
                        </Stack>
                    </Flex>
                    <Text
                        pl={2}
                        textTransform='uppercase'
                        fontSize='sm'
                        color='gray.500'
                        letterSpacing='wide'
                        textAlign='center'
                    >
                        Site Coporativo
                    </Text>

                </Box>
            </Flex>
        </Flex>
    )
}