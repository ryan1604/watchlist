"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const addEntry = async (formData) => {
  const name = formData.get("name");
  const category = formData.get("type");
  const rating = formData.get("rating");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within addEntry server action");
    return;
  }

  const { data, error } = await supabase.from("watchlist").insert([
    {
      user_id: user.id,
      name: name,
      type: category,
      rating: rating,
    },
  ]);

  if (error) {
    console.error("Error creating entry", error);
  }

  revalidatePath("/watchlist");

  return { message: "Success" };
};

export default addEntry;
