"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const updateEntry = async (formData) => {
  const id = formData.get("id");
  const name = formData.get("name");
  const category = formData.get("type");
  const rating = formData.get("rating");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within updateEntry server action");
    return;
  }

  const { data, error } = await supabase
    .from("watchlist")
    .update({
      name: name,
      type: category,
      rating: rating,
    })
    .match({ id, user_id: user.id });

  if (error) {
    console.error("Error updating entry", error);
  }

  revalidatePath("/watchlist");

  return { message: "Success" };
};

export default updateEntry;
