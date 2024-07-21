# Watchlist App

This project is a watchlist app that allows users to create and manage their favorite shows. Users can sign in, add new entries, edit existing entries, and delete entries from their watchlist.

## Features

- **User Authentication**: Secure user authentication using Supabase.
- **Add Entries**: Users can add new shows to their watchlist.
- **Edit Entries**: Users can edit details of existing entries.
- **Delete Entries**: Users can remove entries from their watchlist.
- **Responsive Design**: User-friendly interface with a dark theme.

## Tools

NextJS, React, JavaScript, TailwindCSS, Supabase

## Setup

1. clone the repo
2. navigate to the directory and run: `npm install`
3. setup environment variables by creating `.env.local` file:

```powershell
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

1. run `npm run dev`
2. open [`localhost:3000`](http://localhost:3000) on your browser
