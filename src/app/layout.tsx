import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrimaryNav from "@/components/nav/PrimaryNav";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colby Birkhead",
  description: "Colby Birkhead's personal site",
};

export const viewport: Viewport = {
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimaryNav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
