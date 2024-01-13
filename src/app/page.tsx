import NameList from "@/components/NameList";
import { getNames } from "@/lib/spreadsheet";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default async function Home() {
  const names = await getNames();

  return (
    <main>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        padding={4}
      >
        <Heading size="2xl" mb={4}>
          エルニーニョ Vol. 7
        </Heading>
        <Text fontSize="xl" mb={8}>
          みなさんお疲れ様でした！
        </Text>
        <NameList names={names} />
      </Flex>
    </main>
  );
}
