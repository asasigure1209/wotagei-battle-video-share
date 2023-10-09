import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default async function VideoListTable({
  fileNames,
}: {
  fileNames: string[];
}) {
  return (
    <Box
      borderRadius="md"
      backgroundColor="white"
      textAlign="center"
      color="gray.700"
      padding={2}
    >
      <TableContainer>
        <Table variant="simple" size="lg">
          <TableCaption>
            配布動画の間違いや欠落があれば
            <br />
            運営までご連絡ください
          </TableCaption>
          <Thead>
            <Tr>
              <Th>ファイル名</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {fileNames.map((fileName) => {
              const downloadUrl = `${process.env.WORKER_API}/${fileName}?action=get`;

              return (
                <Tr key={fileName}>
                  <Td>{fileName}</Td>
                  <Td isNumeric>
                    <Button
                      as="a"
                      href={downloadUrl}
                      download={fileName}
                      colorScheme="teal"
                    >
                      ダウンロード
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
