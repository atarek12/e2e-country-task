"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  CardFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { TPost } from "../types";

export type TPostFormValues = {
  title: string;
  content: string;
};

const schema = Yup.object({
  title: Yup.string().required("This field is required!"),
  content: Yup.string().required("This field is required!"),
}).required();

interface AddUpdatePostProps {
  post?: TPost;
  onSubmit: (title: string, content: string, postId: string) => Promise<void>;
}

const AddUpdatePost: React.FC<AddUpdatePostProps> = ({ post, onSubmit }) => {
  const toast = useToast();
  const isAdding = !post;

  const useFormAttributes = useForm<TPostFormValues>({
    defaultValues: { title: post?.title, content: post?.content },
    resolver: yupResolver<TPostFormValues>(schema as any),
  });

  const handleSubmit = async (values: TPostFormValues) => {
    try {
      await onSubmit(values.title, values.content, post?.id || "");
      toast({
        title: "Post saved.",
        description: "We've saved the post.",
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
  };

  return (
    <FormProvider {...useFormAttributes}>
      <form onSubmit={useFormAttributes?.handleSubmit(handleSubmit)}>
        <Card border="1px solid">
          <CardHeader>
            {isAdding ? "Create a new post" : "Update post"}
          </CardHeader>

          <CardBody>
            <Stack spacing="16px">
              <FormInput type="text" name="title" label="Post Title" />
              <FormInput type="textarea" name="content" label="Post Content" />
            </Stack>
          </CardBody>

          <CardFooter>
            <Button
              type="submit"
              width="100%"
              colorScheme="blue"
              isLoading={useFormAttributes.formState.isSubmitting}
            >
              {isAdding ? "Create" : "Update"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export { AddUpdatePost };
