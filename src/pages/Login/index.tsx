import React, { FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log("username", email);
    console.log("password", password);
  };

  return (
    <Center height={"100vh"}>
      <Container>
        <Box
          border={"1px"}
          borderColor="#ddd"
          padding={"2rem"}
          borderRadius="lg"
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={"1rem"}>
              <Text fontSize="2xl" textAlign="center" as="h1">
                Entre com seu e-mail e senha
              </Text>
              <FormControl>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </FormControl>

              <Button colorScheme={"green"} type="submit">Enviar</Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Center>
  );
}

export default Login;
