import { homePath, ticketsPath } from "@/paths";
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

export const metadata = {
  title: "Ticket App",
  description: "Ticket app for generate and manage tickets",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="
          supports-backdrop-blur:bg-background/60
          fixed top-0 left-0 right-0 z-20
          border-b bg-background/95 backdrop-blur
          w-full flex py-2.5 px-5 justify-between"
        >
          <div>
            <Link href={homePath()} className="text-lg font-bold">Home</Link>
          </div>
          <div>
            <Link href={ticketsPath()} className="text-sm underline">Tickets</Link>
          </div>
        </nav>
        <main className="
          min-h-screen flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          bg-secondary/20
          flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
