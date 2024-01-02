import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Footer/Footer";

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
    <html
      style={{ scrollbarGutter: "stable" }}
      className="bg-[#111] scroll-smooth"
      lang="en"
    >
      <body className={inter.className}>
        <header className="sticky top-0 w-full h-auto z-50">
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
