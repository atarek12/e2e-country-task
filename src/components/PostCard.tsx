"use client";

import React from "react";
import { TPost } from "../types";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Avatar,
  Heading,
  CardBody,
  CardFooter,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { ConfirmationModal } from "./ConfirmationModal";
import { api } from "../apis";
import { deletePost } from "@/app/actions";

interface PostCardProps {
  index: number;
  post: TPost;
}

const PostCard: React.FC<PostCardProps> = ({ post, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleDelete = async () => {
    await deletePost(post.id);
    onClose();
    toast({
      title: "Post deleted.",
      description: "We've deleted the post.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Card border="1px solid" borderColor="blue.100">
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={`${index + 1}`} />
            <Box>
              <Heading size="sm">{post.title}</Heading>
              <Text>POST ID: {post.id}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{post.content}</Text>
        </CardBody>

        <CardFooter>
          <Button
            flex="1"
            mr="10px"
            colorScheme="red"
            variant="outline"
            leftIcon={<DeleteIcon />}
            onClick={onOpen}
          >
            Delete Post
          </Button>
          <Button
            flex="1"
            colorScheme="blue"
            leftIcon={<EditIcon />}
            as={Link}
            href={`post/${post.id}`}
          >
            Edit Post
          </Button>
        </CardFooter>
      </Card>

      <ConfirmationModal
        isOpen={isOpen}
        onConfirm={handleDelete}
        onClose={onClose}
      />
    </>
  );
};

export { PostCard };
