"use client";

import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface CreateButtonProps {}

const CreateButton: React.FC<CreateButtonProps> = ({}) => {
  return (
    <Button colorScheme="blue" leftIcon={<AddIcon />} as={Link} href="/create">
      Create Post
    </Button>
  );
};

export { CreateButton };
