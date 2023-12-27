"use client";

import React, { useState } from "react";
import { TPost } from "../types";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
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
import { deletePostAction } from "@/app/actions";

interface PostCardProps {
  post: TPost;
  showDeleteButton?: boolean;
  showViewButton?: boolean;
  showEditButton?: boolean;
  showContent?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  showDeleteButton,
  showViewButton,
  showEditButton,
  showContent,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deletePostAction(post.id);
      onClose();
      toast({
        title: "Post deleted.",
        description: "We've deleted the post.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error!!.",
        description: "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card border="1px solid" borderColor="blue.100">
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={post.id} />
            <Box>
              <Heading size="sm">{post.title}</Heading>
              <Text>POST ID: {post.id}</Text>
            </Box>
          </Flex>
        </CardHeader>
        {showContent && (
          <CardBody>
            <Text>{post.content}</Text>
          </CardBody>
        )}

        <CardFooter>
          {showDeleteButton && (
            <Button
              flex="1"
              colorScheme="red"
              variant="outline"
              mr="20px"
              leftIcon={<DeleteIcon />}
              onClick={onOpen}
            >
              Delete Post
            </Button>
          )}
          {showEditButton && (
            <Button
              flex="1"
              colorScheme="blue"
              leftIcon={<EditIcon />}
              as={Link}
              href={`/post/${post.id}/edit`}
            >
              Edit Post
            </Button>
          )}
          {showViewButton && (
            <Button
              flex="1"
              leftIcon={<ViewIcon />}
              as={Link}
              href={`/post/${post.id}`}
            >
              View Post
            </Button>
          )}
        </CardFooter>
      </Card>

      <ConfirmationModal
        isOpen={isOpen}
        onConfirm={handleDelete}
        onClose={onClose}
        isLoading={isLoading}
      />
    </>
  );
};

export { PostCard };
