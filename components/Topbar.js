import { Flex, Box } from "@chakra-ui/layout";

export default function Topbar() {
    const bgColor = '#fff';
    const color = '#1A202C';
    const borderColor = '#DDD';

    return (
        <Flex
            w="full"
            position="fixed"
            zIndex={9999}
            bgColor={bgColor}
            color={color}
            borderBottom={`1px solid ${borderColor}`}
            minH="14"
            >

            <Flex
            alignItems="center"
            justifyContent="space-between"
            w="full"
            maxW="1128"
            margin="0 auto"
            p={4}
            >
                <Box>
                    Alex Nascimento
                </Box>
                <Box>
                    Login
                </Box>
            </Flex>
        </Flex>
    )
}