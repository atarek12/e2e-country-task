import { Container, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Container as="main" maxW="1400" paddingTop="60px">
      <Stack>
        <Skeleton />
        <SkeletonText />
      </Stack>
    </Container>
  );
}
