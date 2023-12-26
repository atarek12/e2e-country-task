"use server";

import { api } from "@/src/apis";
import { revalidatePath } from "next/cache";

export async function deletePost(postId: string) {
  await api.deletePost({ postId });
  revalidatePath("/");
}
