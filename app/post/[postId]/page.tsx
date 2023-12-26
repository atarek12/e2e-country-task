import { api } from "@/src/apis";
import { BackButton, PostCard } from "@/src/components";
import { Container } from "@chakra-ui/react";

interface ViewPostProps {
  params: { postId: string };
}

export default async function ViewPost({ params }: ViewPostProps) {
  const post = await api.getPost({ postId: params.postId });
  return (
    <Container as="main" maxW="1400" paddingTop="60px">
      <BackButton />
      <PostCard post={post} showContent showEditButton showDeleteButton />
    </Container>
  );
}
