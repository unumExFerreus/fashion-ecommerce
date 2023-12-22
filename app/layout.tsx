import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "open fashion",
  description: "no idea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-[#111]" lang="en">
      <body className={inter.className}>
        <header className="flex justify-center">
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
