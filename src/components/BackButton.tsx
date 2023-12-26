"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      variant="link"
      as={Link}
      href="/"
      replace
      mb="20px"
    >
      GO BACK
    </Button>
  );
};

export { BackButton };
