import Form from "@/components/Form";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        color={"white"}
        padding={4}
      >
        <Heading size="2xl" mb={4}>
          エルニーニョ Vol. 6
        </Heading>
        <Text fontSize="xl" mb={8}>
          みなさんお疲れ様でした！
        </Text>
        <Form />
      </Flex>
    </main>
  );
}
