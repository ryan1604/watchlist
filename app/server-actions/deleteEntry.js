"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const deleteEntry = async (formData) => {
  const watchlistId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within deleteEntry server action");
    return;
  }

  const { error } = await supabase.from("watchlist").delete().match({
    id: watchlistId,
    user_id: user.id,
  });

  if (error) {
    console.error("Error deleting entry", error);
  }

  revalidatePath("/watchlist");

  return { message: "Success" };
};

export default deleteEntry;
