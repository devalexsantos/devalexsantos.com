import { Flex, Box, Stack, Badge, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

export default function Jobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/devalexsantos/repos")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const borderColor = useColorModeValue("green", "teal");

  return (
    <Flex
      margin="0 auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box p={3}>
        <Text fontWeight="bold" m={4}>
          Abaixo confira meus repositórios no GitHub. Todas as informações estão
          vindo diretamente da API deles de forma automática
        </Text>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" maxW="960px">
        {data &&
          data.map((item, key) => (
            <Box
              key={key}
              w="250px"
              h="100%"
              rounded="10px"
              overflow="hidden"
              boxShadow="sm"
              borderColor={borderColor}
              border="1px"
              m={1}
            >
              <Flex p={2} direction="row" flexWrap="wrap">
                <Text
                  pl={2}
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="wide"
                  textAlign="center"
                  w="100%"
                  mb={4}
                >
                  {item.name}
                </Text>
                <Text fontSize="sm" mb={2}>
                  {item.description}
                </Text>
                <br />
                {item.topics.map((topic, key) => (
                  <Stack key={key} display="inline-block">
                    <Badge
                      variant="solid"
                      colorScheme={borderColor}
                      rounded="full"
                      px={2}
                      mr={2}
                      mb={2}
                      fontSize="xs"
                    >
                      <Text fs="5pt">{topic}</Text>
                    </Badge>
                  </Stack>
                ))}
              </Flex>
              <Flex m="auto" justifyContent="center" mb={4}>
                {item.homepage && (
                  <Button
                    rightIcon={<ViewIcon />}
                    colorScheme="teal"
                    variant="outline"
                    size="xs"
                    mr={2}
                  >
                    <a href={item.homepage} target="_blank" rel="noreferrer">
                      Ver Online
                    </a>
                  </Button>
                )}
                <Button
                  rightIcon={<EditIcon />}
                  colorScheme="teal"
                  variant="outline"
                  size="xs"
                >
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    Ver no GitHub
                  </a>
                </Button>
              </Flex>
            </Box>
          ))}
      </Flex>
    </Flex>
  );
}
