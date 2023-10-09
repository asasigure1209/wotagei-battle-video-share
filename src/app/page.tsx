import Form from "@/components/Form";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        color={"white"}
      >
        <Heading size="2xl" mb={12}>
          エルニーニョ Vol. 6
        </Heading>
        <Form />
      </Flex>
    </main>
  );
}
