import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function NameList({ names }: { names: string[] }) {
  return (
    <Box
      borderRadius="md"
      backgroundColor="white"
      textAlign="center"
      color="gray.700"
      padding={2}
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>エントリーNo.</Th>
              <Th>エントリー名</Th>
            </Tr>
          </Thead>
          <Tbody>
            {names.map((name, index) => {
              return (
                <Tr key={name}>
                  <Td isNumeric>{index + 1}</Td>
                  <Td>
                    <ChakraLink
                      as={Link}
                      href={`/videos/${encodeURIComponent(name)}`}
                      scroll={false}
                    >
                      {name}
                    </ChakraLink>
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
