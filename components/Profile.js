import {
  Text,
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Heading,
  Container,
  Button,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const { colorMode, toggleColorMode } = useColorMode();

  const borderColor = useColorModeValue("#DDD", "#fff");

  const itemListTech = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const listTech = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/devalexsantos")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Flex
        pt="60px"
        minH="50vh"
        maxW="1064px"
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box pr={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data && data.avatar_url}
              alt="Alex Santos - Front End Developer"
              borderRadius="full"
              boxSize="200px"
              border="5px solid"
              borderColor={borderColor}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Flex flexDirection="column" justifyContent="center">
              <Button variant="outline" size="sm" mt={2}>
                <a
                  href="https://github.com/devalexsantos?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Public Repos: {!data && "Carregando..."}
                  {data && data.public_repos}
                </a>
              </Button>
              <Button variant="outline" size="sm" mt={2}>
                <a
                  href="https://github.com/devalexsantos?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowForwardIcon />
                  <Text display="inline-block" ml={2}>
                    Profile Github
                  </Text>
                </a>
              </Button>
            </Flex>
          </motion.div>
        </Box>
        <Box>
          <Flex justifyContent="flex-end" w="full" p={4}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, yoyo: Infinity }}
              style={{ cursor: "pointer" }}
            >
              {colorMode === "light" ? (
                <MoonIcon w={6} h={6} onClick={toggleColorMode} />
              ) : (
                <SunIcon w={6} h={6} onClick={toggleColorMode} />
              )}
            </motion.div>
          </Flex>
          <Container mb={3}>
            <Heading as="h1" fontWeight="bold" fontSize="42px">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{ display: "flex" }}
              >
                oi, eu sou o alex
                {colorMode === "light" ? " 😎" : " 🤓"}
              </motion.div>
            </Heading>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Apaixonado por criar telas, tenho um background de Designer.
              Atualmente estudo e trabalho com desenvolvimento web front end.
              Sou focado em me manter atualizado com as tecnologias mais
              modernas do mercado.
            </motion.div>
            <Text as="p" mt={4}>
              Tecnologias:
            </Text>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={listTech}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  React.js
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Next.js
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Javascript
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Tailwind
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Bootstrap
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Typescript
                </Box>
              </motion.div>
              <motion.div variants={itemListTech}>
                <Box
                  p={1}
                  m={2}
                  border="0.01em solid"
                  borderColor={borderColor}
                  rounded="md"
                >
                  Chackara UI
                </Box>
              </motion.div>
            </motion.div>
          </Container>
        </Box>
      </Flex>
    </>
  );
}
