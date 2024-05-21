import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const laptops = [
  {
    id: 1,
    name: "Laptop Model A",
    description: "A powerful laptop with 16GB RAM and 512GB SSD.",
    price: "$1200",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2RlbCUyMEF8ZW58MHx8fHwxNzE2MjcxMzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Laptop Model B",
    description: "A sleek laptop with 8GB RAM and 256GB SSD.",
    price: "$800",
    image: "https://images.unsplash.com/photo-1666459970054-abd016a7c456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2RlbCUyMEJ8ZW58MHx8fHwxNzE2MjcxMzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Laptop Model C",
    description: "A budget-friendly laptop with 4GB RAM and 128GB SSD.",
    price: "$500",
    image: "https://images.unsplash.com/photo-1533698215883-e2edc689fef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2RlbCUyMEN8ZW58MHx8fHwxNzE2MjcxMzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Laptop Store
      </Heading>
      <VStack spacing={8}>
        {laptops.map((laptop) => (
          <Box key={laptop.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <HStack spacing={4} p={4}>
              <Image boxSize="150px" objectFit="cover" src={laptop.image} alt={laptop.name} />
              <VStack align="start" spacing={2}>
                <Heading as="h2" size="md">
                  {laptop.name}
                </Heading>
                <Text>{laptop.description}</Text>
                <Text fontWeight="bold">{laptop.price}</Text>
                <HStack spacing={4}>
                  <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                    Add to Cart
                  </Button>
                  <IconButton aria-label="More Info" icon={<FaInfoCircle />} />
                </HStack>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
