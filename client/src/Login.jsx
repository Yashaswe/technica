import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can implement your login logic here, e.g., sending a request to your backend API.
  };

  return (
    <Box
      p={4}
      bgColor="white"
      padding={10}
      style={{ borderRadius: 10, boxShadow: "1px 2px 2px black" }}
    >
      <Heading as="h2" size="xl" textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            type="submit"
            size="lg"
            fontSize="md"
            _hover={{
              bgGradient:
                "radial-gradient(circle at 11.7% 80.6%, rgb(249, 185, 255) 0%, rgb(177, 172, 255) 49.3%, rgb(98, 203, 255) 89%)",
            }}
            bgGradient="radial-gradient(circle at 11.7% 80.6%, rgb(261, 194, 268) 0%, rgb(185, 180, 268) 49.3%, rgb(103, 213, 268) 89%)"
            isLoading={false} // Set to true while the login request is in progress
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
