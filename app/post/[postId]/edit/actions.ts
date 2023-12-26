"use server";

import { api } from "@/src/apis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePostAction(
  title: string,
  content: string,
  postId: string,
) {
  await api.updatePost({ postId, title, content });
  revalidatePath("/");
  redirect("/");
}
