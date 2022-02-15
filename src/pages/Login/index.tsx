import React, { FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
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
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
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
          
          <Button type="submit">Enviar</Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
