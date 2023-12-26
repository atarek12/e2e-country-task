"use client";

import { SunIcon } from "@chakra-ui/icons";
import { Avatar, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface SiteHeaderProps {}

const SiteHeader: React.FC<SiteHeaderProps> = ({}) => {
  return (
    <Stack
      as="header"
      direction="row"
      justify="space-between"
      align="center"
      position="sticky"
      top="0"
      padding="12px 16px"
      background="gray.300"
      boxShadow="md"
      zIndex={1}
    >
      <Link href="/">
        <Stack direction="row" align="center" spacing="6px">
          <SunIcon color="blue.500" boxSize="40px" />
          <Text
            color="blue.700"
            fontSize="32px"
            fontWeight="700"
            letterSpacing="-0.64px"
          >
            E2E Country
          </Text>
        </Stack>
      </Link>

      <Avatar />
    </Stack>
  );
};

export default SiteHeader;
