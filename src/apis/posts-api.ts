import { TPost } from "../types";
import { fetchApi } from "./fetchApi";

export async function listPosts() {
  const res = await fetchApi<TPost[]>(`/posts`, {
    method: "GET",
  });
  return res;
}

export type TGetPostVariables = {
  postId: string;
};
export async function getPost(variables: TGetPostVariables) {
  const { postId } = variables;
  const res = await fetchApi<TPost>(`/posts/${postId}`, {
    method: "GET",
  });
  return res;
}

export type TCreatePostVariables = {
  title: string;
  content: string;
};
export async function createPost(variables: TCreatePostVariables) {
  const { ...data } = variables;
  const res = await fetchApi<TPost>(`/posts`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res;
}

export type TUpdatePostVariables = {
  postId: string;
  title: string;
  content: string;
};
export async function updatePost(variables: TUpdatePostVariables) {
  const { postId, ...data } = variables;
  const res = await fetchApi<TPost>(`/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res;
}

export type TDeletePostVariables = {
  postId: string;
};
export async function deletePost(variables: TDeletePostVariables) {
  const { postId } = variables;
  await fetchApi<void>(`/posts/${postId}`, {
    method: "DELETE",
  });
  return { postId };
}
