'use client';
import dynamic from 'next/dynamic';

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { useState, useEffect } from 'react';

import "./globals.css";


const Dynamic = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

const poppins = Poppins({ weight: '400', subsets: ["latin"] });


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
        <Dynamic>{children}</Dynamic>
        <Footer />
      </body>
    </html>
  );
}
