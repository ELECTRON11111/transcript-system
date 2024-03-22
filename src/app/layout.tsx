import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const league_spartan = League_Spartan({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Transcript System",
  description: "streamline transcript management across universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    // This is the root Layout File (Our index.html file basically)
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
        sizes="16x16"
      />
      </head>
      <body className={`${league_spartan.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
