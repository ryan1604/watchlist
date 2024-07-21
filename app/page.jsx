import AuthForm from "@/app/components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Welcome to Watchlist</h1>
          <p className="mt-2 text-sm text-gray-400">
            Your personal space to create and manage your favourite shows. Sign in to create, view, edit and delete
            items from your watchlist.
          </p>
        </div>
        <div className="mt-8">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
