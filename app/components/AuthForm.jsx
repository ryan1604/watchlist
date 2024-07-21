"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const AuthForm = () => {
  const supabase = createClientComponentClient();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo={`${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`}
      appearance={{
        theme: "dark",
        button: {
          className: "bg-white-400 text-gray-900 hover:bg-gray-600",
        },
        input: {
          className: "bg-gray-400 border-gray-600 text-white",
        },
      }}
    />
  );
};

export default AuthForm;
