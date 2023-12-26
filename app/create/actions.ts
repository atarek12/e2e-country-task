"use server";

import { api } from "@/src/apis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(title: string, content: string) {
  await api.createPost({ title, content });
  revalidatePath("/");
  redirect("/");
}
