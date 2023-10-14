import VideoListTable from "@/components/VideoListTable";
import { getEmails, getFileNamesForEmail } from "@/lib/spreadsheet";
import { Flex, Heading } from "@chakra-ui/react";

export default async function Videos({
  params,
}: {
  params: { email: string };
}) {
  const fileNames = await getFileNamesForEmail(
    decodeURIComponent(params.email)
  );

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
          エルニーニョ Vol. 6
        </Heading>

        <VideoListTable fileNames={fileNames} />
      </Flex>
    </main>
  );
}

export async function generateStaticParams() {
  const emails = await getEmails();
  return emails.map((email) => ({
    email,
  }));
}
