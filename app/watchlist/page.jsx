import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import WatchForm from "@/app/components/WatchForm";
import EditWatch from "@/app/components/EditWatch";
import deleteEntry from "@/app/server-actions/deleteEntry";

const Watchlist = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: watchlist, error } = await supabase
    .from("watchlist")
    .select("*")
    .eq("user_id", user.id)
    .order("type", { ascending: true });

  if (error) {
    console.log("Error fetching watchlist");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Watchlist</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="bg-slate-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign Out
            </button>
          </form>
        </div>
        <WatchForm />
        <div className="mt-6 space-y-4">
          {watchlist.map((entry) => (
            <div key={entry.id} className="bg-gray-700 p-4 rounded-md shadow-sm">
              <div className="text-xl font-semibold flex justify-between">
                <h2>
                  {entry.type} - {entry.name}
                </h2>
                <h2>{entry.rating}/10</h2>
              </div>
              <div className="flex items-center mt-2">
                <form action={deleteEntry} className="mr-2">
                  <input type="hidden" name="id" value={entry.id} />
                  <button
                    type="submit"
                    className="bg-red-500 text-white py-1 px-3 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </form>
                <EditWatch entry={entry} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
