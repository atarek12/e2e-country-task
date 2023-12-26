import { AddUpdatePost, BackButton } from "@/src/components";
import { Container } from "@chakra-ui/react";
import { createPostAction } from "./actions";

export default async function CreatePost() {
  return (
    <Container as="main" maxW="1400" paddingTop="60px">
      <BackButton />
      <AddUpdatePost onSubmit={createPostAction} />
    </Container>
  );
}
