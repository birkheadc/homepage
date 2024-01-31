import type { Metadata, Viewport } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Frame from "../components/frame/Frame";
import Providers from "@/contexts/providers/Providers";
import utils from "../utils";

export const metadata: Metadata = {
  title: "Colby Birkhead",
  description: "Colby Birkhead's personal site",
};

export const viewport: Viewport = {
  
}

const vt323 = VT323({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme='a'>
        <body className={vt323.className}>
          <Frame>
            {children}
          </Frame>
        </body>
      </html>
    </Providers>
  );
}
