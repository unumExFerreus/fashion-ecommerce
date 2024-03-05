import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Navigation/Nav";

import { CartProvider } from "@/Context/CartContext";

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
      className="bg-[#111] scroll-smooth"
      lang="en"
    >
      <body>
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
