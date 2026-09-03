import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlyRank AI Dashboard",
  description: "Modern Next.js 16 AI Dashboard built for FlyRank Internship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        <header className="navbar">
          <div className="container">

            <Link href="/" className="logo">
              🚀 FlyRank AI
            </Link>

            <nav className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/health">Health</Link>
            </nav>

          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          © 2026 FlyRank AI Dashboard • Built with Next.js 16 + Tailwind CSS
        </footer>

      </body>
    </html>
  );
}