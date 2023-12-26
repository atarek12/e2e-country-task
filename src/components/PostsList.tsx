import React from "react";
import { TPost } from "../types";
import { Box, Stack } from "@chakra-ui/react";
import { PostCard } from ".";

interface PostsListProps {
  posts: TPost[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <Stack spacing="20px">
      {posts.map((post, index) => (
        <Box key={post.id}>
          <PostCard index={index} post={post} />
        </Box>
      ))}
    </Stack>
  );
};

export { PostsList };
