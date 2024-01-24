import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Navigation/Nav";

import { CartProvider } from "@/Context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Fashion",
  description: "Open Fashion Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{ scrollbarGutter: "stable" }}
      className="bg-[#111] scroll-smooth select-auto"
      lang="en"
    >
      <body className={inter.className}>
        <header className="sticky top-0 w-full h-auto z-50">
          <Nav />
        </header>
        <main>
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
