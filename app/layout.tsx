import './globals.css';

export const metadata = { title: 'EdgeBoard', description: 'Sports picks without the circus.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b flex justify-between">
          <h1 className="font-bold">EdgeBoard</h1>
          <nav className="flex gap-4 text-sm">
            <a href="/">Home</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/feed">Feed</a>
            <a href="/owner">Owner</a>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
