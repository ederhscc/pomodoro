import { useState, useEffect } from "react";

import {
  Box,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  Center,
  HStack,
} from "@chakra-ui/react";

const PomodoroTimer = () => {
  return (
    <Center>
      <Box width="100%" maxWidth="400px" p="4">
        <Text fontSize="4xl" mb="4" textAlign="center">
          10:00
        </Text>
        <FormControl mb="4">
          <FormLabel>Definir tempo(minutos)</FormLabel>
          <Input type="number" />
        </FormControl>
        <HStack>
          <Button>Iniciar</Button>
          <Button colorScheme="gray">Reiniciar</Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default PomodoroTimer;
