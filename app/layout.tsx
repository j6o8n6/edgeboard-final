import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export const metadata = {
  title: "EdgeBoard",
  description: "Sports picks without the circus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="p-4 border-b flex justify-between">
            <div className="font-bold">EdgeBoard</div>
            <nav className="flex gap-4 text-sm items-center">
              <a href="/">Home</a>
              <a href="/leaderboard">Leaderboard</a>
              <a href="/feed">Feed</a>
              <a href="/owner">Owner</a>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="border rounded px-3 py-1">Sign in</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </header>
          <main className="p-8">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
