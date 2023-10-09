"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Heading, Input } from "@chakra-ui/react";

function Form() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/videos/${encodeURIComponent(email)}`);
  };

  return (
    <Box
      borderRadius="md"
      backgroundColor="white"
      padding="8"
      textAlign="center"
      color="gray.700"
    >
      <Heading as="h2" size="lg" mb={12}>
        動画配布フォーム
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="メールアドレスを入力"
        />
        <Button colorScheme="teal" type="submit" mt={8}>
          自分の動画を探す
        </Button>
      </form>
    </Box>
  );
}

export default Form;
