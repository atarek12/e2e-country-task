import { api } from "@/src/apis";
import { PostsList } from "@/src/components";
import { Container, Heading, Stack } from "@chakra-ui/react";

export default async function Home() {
  const posts = await api.listPosts();
  return (
    <Container as="main" maxW="1400" paddingTop="60px">
      <Stack spacing="16px" flex="1">
        <Heading>What is new...</Heading>
        <PostsList posts={posts || []} />
      </Stack>
    </Container>
  );
}
