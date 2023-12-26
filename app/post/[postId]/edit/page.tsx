import { AddUpdatePost, BackButton } from "@/src/components";
import { Container } from "@chakra-ui/react";
import { updatePostAction } from "./actions";
import { api } from "@/src/apis";

interface UpdatePostProps {
  params: { postId: string };
}

export default async function UpdatePost({ params }: UpdatePostProps) {
  const post = await api.getPost({ postId: params.postId });
  return (
    <Container as="main" maxW="1400" paddingTop="60px">
      <BackButton />
      <AddUpdatePost post={post} onSubmit={updatePostAction} />
    </Container>
  );
}
