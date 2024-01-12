import VideoListTable from "@/components/VideoListTable";
import { getNames, getFileNamesForName } from "@/lib/spreadsheet";
import { Flex, Heading } from "@chakra-ui/react";

export default async function Videos({ params }: { params: { name: string } }) {
  const fileNames = await getFileNamesForName(decodeURIComponent(params.name));

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
        <Heading size="2xl" mb={12}>
          エルニーニョ Vol. 7
        </Heading>

        <VideoListTable fileNames={fileNames} />
      </Flex>
    </main>
  );
}

export async function generateStaticParams() {
  const names = await getNames();
  return names.map((name) => ({
    name: name,
  }));
}
