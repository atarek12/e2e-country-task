"use server";

import { api } from "@/src/apis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: string) {
  await api.deletePost({ postId });
  revalidatePath("/");
  redirect("/");
}
