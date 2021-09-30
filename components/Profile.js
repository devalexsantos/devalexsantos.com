import { Box, Flex, useColorMode, useColorModeValue, Heading, Container, Button, Divider } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react"

export default function Profile() {
    const { colorMode, toggleColorMode } = useColorMode();

    const borderColor = useColorModeValue('#DDD', '#fff');

    return (
        <>
            <Flex pt="60px" minH="50vh" maxW="1064px" margin="0 auto" justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box pr={6}>
                    <Image
                        src="/alex-santos.jpg"
                        alt="Alex Santos - Front End Developer"
                        borderRadius="full"
                        boxSize="200px"
                        border="5px solid"
                        borderColor={borderColor}
                    />
                    <Flex flexDirection="column" justifyContent="center">
                        <Button variant="outline" size="sm" mt={2}>
                            Public Repos (3)
                        </Button>
                    </Flex>
                </Box>
                <Box>
                    <Flex justifyContent="flex-end" w="full" p={4}>
                        {colorMode === 'light' ? (
                            <MoonIcon w={6} h={6} onClick={toggleColorMode} />
                        ) : (
                            <SunIcon w={6} h={6} onClick={toggleColorMode} />
                        )}
                    </Flex>
                    <Container mb={3}>
                        <Heading as="h1" fontWeight="bold" fontSize="42px">oi, eu sou alex 😉</Heading>
                        There are many benefits to a joint design and development system. Not only
                        does it bring benefits to the design team, but it also brings benefits to
                        engineering teams. It makes sure that our experiences have a consistent look
                        and feel, not just in our design specs, but in production
                        <p>Tecnologias:</p>

                        <Flex flexWrap="wrap">
                            <Box p={1} m={2} border="0.01em solid" borderColor={borderColor} rounded="md">Next.js</Box>
                            <Box p={1} m={2} border="0.01em solid" borderColor={borderColor} rounded="md">React.js</Box>
                            <Box p={1} m={2} border="0.01em solid" borderColor={borderColor} rounded="md">Javascript</Box>
                            <Box p={1} m={2} border="0.01em solid" borderColor={borderColor} rounded="md">CSS</Box>
                            <Box p={1} m={2} border="0.01em solid" borderColor={borderColor} rounded="md">HTML</Box>
                        </Flex>
                    </Container>

                </Box>
            </Flex>
            <Divider orientation="horizontal" />
            <Flex maxW="1064px" margin="0 auto" justifyContent="flex-start" alignItems="center" flexWrap="wrap">
                <Box p={3}>albuns jobs dos quais me orgulho:</Box>
            </Flex>

        </>
    )
}