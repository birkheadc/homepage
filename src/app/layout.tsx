import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Frame from "../components/frame/Frame";
import Providers from "@/contexts/providers/Providers";

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
    <Providers>
      <html lang="en" data-theme='a'>
        <Frame>
          {children}
        </Frame>
      </html>
    </Providers>
  );
}
