import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Designed and developed by the BattleDev",
};

const Header = dynamic(() => import("./Components/Header"), { ssr: false });

// Lazy load Footer component
const Footer = dynamic(() => import("./Components/Footer"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
